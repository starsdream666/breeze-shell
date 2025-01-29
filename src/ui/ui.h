#pragma once
#include <atomic>
#include <chrono>
#include <expected>
#include <memory>
#include <mutex>
#include <string>
#include <utility>

#include "GLFW/glfw3.h"
#include "nanovg.h"

#include "widget.h"

namespace ui {
struct render_target {
  std::shared_ptr<widget> root;
  GLFWwindow *window;

  bool acrylic = false;
  bool extend = false;
  bool transparent = false;
  bool no_focus = false;
  bool capture_all_input = false;
  bool decorated = true;
  bool topmost = false;
  bool resizable = false;

  NVGcontext *nvg = nullptr;
  int width = 1280;
  int height = 720;
  static std::atomic_int view_cnt;
  int view_id = view_cnt++;
  float dpi_scale = 1;
  std::expected<bool, std::string> init();

  static std::vector<std::function<void()>> main_thread_tasks;
  static std::mutex main_thread_tasks_mutex;
  static void post_main_thread_task(std::function<void()> task);

  std::mutex render_mutex = {};
  
  static std::expected<bool, std::string> init_global();
  void start_loop();
  void render();
  void resize(int width, int height);
  void set_position(int x, int y);
  void reset_view();
  void close();
  std::optional<std::function<void(bool)>> on_focus_changed;
  std::chrono::high_resolution_clock clock{};
  decltype(clock.now()) last_time = clock.now();
  bool mouse_down = false, right_mouse_down = false;
  void* parent = nullptr;

  render_target() = default;
  ~render_target();
  render_target operator=(const render_target &) = delete;
  render_target(const render_target &) = delete;
  render_target(render_target &&) = default;
  render_target &operator=(render_target &&) = default;
};
} // namespace ui