// This file is generated by scripts/bindgen/index.ts
// Do not modify this file manually!

#pragma once
#include "binding_types.h"
#include "quickjs.h"
#include "quickjspp.hpp"

template <typename T>
struct js_bind {
    static void bind(qjs::Context::Module &mod) {}
};

template <> struct qjs::js_traits<mb_shell::example_struct_jni> {
    static mb_shell::example_struct_jni unwrap(JSContext *ctx, JSValueConst v) {
        mb_shell::example_struct_jni obj;
    
        obj.a = js_traits<int>::unwrap(ctx, JS_GetPropertyStr(ctx, v, "a"));
        
        obj.b = js_traits<int>::unwrap(ctx, JS_GetPropertyStr(ctx, v, "b"));
        
        obj.c = js_traits<std::string>::unwrap(ctx, JS_GetPropertyStr(ctx, v, "c"));
        
        return obj;
    }

    static JSValue wrap(JSContext *ctx, const mb_shell::example_struct_jni &val) noexcept {
        JSValue obj = JS_NewObject(ctx);
    
        JS_SetPropertyStr(ctx, obj, "a", js_traits<int>::wrap(ctx, val.a));
        
        JS_SetPropertyStr(ctx, obj, "b", js_traits<int>::wrap(ctx, val.b));
        
        JS_SetPropertyStr(ctx, obj, "c", js_traits<std::string>::wrap(ctx, val.c));
        
        JS_SetPropertyStr(
            ctx, obj, "add1",
            JS_NewCFunction(
                ctx,
                [](JSContext *ctx, JSValueConst this_val, int argc, JSValueConst *argv) -> JSValue {
                    auto obj = js_traits<mb_shell::example_struct_jni>::unwrap(ctx, this_val);
                    if (argc == 2) {
                        return js_traits<int>::wrap(
                            ctx,
                            obj.add1(
                                js_traits<int>::unwrap(ctx, argv[0]), js_traits<int>::unwrap(ctx, argv[1])
                            )
                        );
                    } else {
                        return JS_ThrowTypeError(ctx, "Expected 2 arguments");
                    }
                },
                "add1", 2));
        
        JS_SetPropertyStr(
            ctx, obj, "add2",
            JS_NewCFunction(
                ctx,
                [](JSContext *ctx, JSValueConst this_val, int argc, JSValueConst *argv) -> JSValue {
                    auto obj = js_traits<mb_shell::example_struct_jni>::unwrap(ctx, this_val);
                    if (argc == 2) {
                        return js_traits<std::variant<int, std::string>>::wrap(
                            ctx,
                            obj.add2(
                                js_traits<std::string>::unwrap(ctx, argv[0]), js_traits<std::string>::unwrap(ctx, argv[1])
                            )
                        );
                    } else {
                        return JS_ThrowTypeError(ctx, "Expected 2 arguments");
                    }
                },
                "add2", 2));
        
        return obj;
    }
};
template<> struct js_bind<mb_shell::example_struct_jni> {
    static void bind(qjs::Context::Module &mod) {
        mod.class_<mb_shell::example_struct_jni>("example_struct_jni")
    
                .fun<&mb_shell::example_struct_jni::add1>("add1")
                .fun<&mb_shell::example_struct_jni::add2>("add2")
                .fun<&mb_shell::example_struct_jni::a>("a")
                .fun<&mb_shell::example_struct_jni::b>("b")
                .fun<&mb_shell::example_struct_jni::c>("c")
            ;
    }

};
    
template <> struct qjs::js_traits<mb_shell::menu_controller> {
    static mb_shell::menu_controller unwrap(JSContext *ctx, JSValueConst v) {
        mb_shell::menu_controller obj;
    
        return obj;
    }

    static JSValue wrap(JSContext *ctx, const mb_shell::menu_controller &val) noexcept {
        JSValue obj = JS_NewObject(ctx);
    
        JS_SetPropertyStr(
            ctx, obj, "test",
            JS_NewCFunction(
                ctx,
                [](JSContext *ctx, JSValueConst this_val, int argc, JSValueConst *argv) -> JSValue {
                    auto obj = js_traits<mb_shell::menu_controller>::unwrap(ctx, this_val);
                    if (argc == 0) {
                        obj.test(); return JS_UNDEFINED;
                    } else {
                        return JS_ThrowTypeError(ctx, "Expected 0 arguments");
                    }
                },
                "test", 0));
        
        return obj;
    }
};
template<> struct js_bind<mb_shell::menu_controller> {
    static void bind(qjs::Context::Module &mod) {
        mod.class_<mb_shell::menu_controller>("menu_controller")
    
                .static_fun<&mb_shell::menu_controller::test>("test")
            ;
    }

};
    
inline void bindAll(qjs::Context::Module &mod) {

    js_bind<mb_shell::example_struct_jni>::bind(mod);

    js_bind<mb_shell::menu_controller>::bind(mod);

}
