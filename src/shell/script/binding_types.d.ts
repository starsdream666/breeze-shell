// This file is generated by scripts/bindgen/index.ts
// Do not modify this file manually!

declare module 'mshell' {


export class example_struct_jni {
	a: number
	b: number
	c: string
	add1: ((arg1: number, arg2: number) => number)
	add2: ((arg1: string, arg2: string) => number | string)
}
    
export class folder_view_controller {
	current_path: string
	focused_file_path: string
	selected_files: Array<string>
	change_folder: ((arg1: string) => void)
	focus_file: ((arg1: string) => void)
	open_file: ((arg1: string) => void)
	open_folder: ((arg1: string) => void)
	scroll_to_file: ((arg1: string) => void)
	refresh: (() => void)
	select_all: (() => void)
	select_none: (() => void)
	invert_selection: (() => void)
	copy: (() => void)
	cut: (() => void)
	paste: (() => void)
}
    
export class window_titlebar_controller {
	is_click_in_titlebar: boolean
	title: string
	executable_path: string
	hwnd: number
	x: number
	y: number
	width: number
	height: number
	maximized: boolean
	minimized: boolean
	focused: boolean
	visible: boolean
	set_title: ((arg1: string) => void)
	set_icon: ((arg1: string) => void)
	set_position: ((arg1: number, arg2: number) => void)
	set_size: ((arg1: number, arg2: number) => void)
	maximize: (() => void)
	minimize: (() => void)
	restore: (() => void)
	close: (() => void)
	focus: (() => void)
	show: (() => void)
	hide: (() => void)
}
    
export class input_box_controller {
	text: string
	placeholder: string
	multiline: boolean
	password: boolean
	readonly: boolean
	disabled: boolean
	x: number
	y: number
	width: number
	height: number
	set_text: ((arg1: string) => void)
	set_placeholder: ((arg1: string) => void)
	set_position: ((arg1: number, arg2: number) => void)
	set_size: ((arg1: number, arg2: number) => void)
	set_multiline: ((arg1: boolean) => void)
	set_password: ((arg1: boolean) => void)
	set_readonly: ((arg1: boolean) => void)
	set_disabled: ((arg1: boolean) => void)
	focus: (() => void)
	blur: (() => void)
	select_all: (() => void)
	select_range: ((arg1: number, arg2: number) => void)
	set_selection: ((arg1: number, arg2: number) => void)
	insert_text: ((arg1: string) => void)
	delete_text: ((arg1: number, arg2: number) => void)
	clear: (() => void)
}
    
export class js_menu_action_event_data {
	
	
}
    
export class js_menu_data {
	type?: string | undefined
	name?: string | undefined
	submenu?: ((arg1: menu_controller) => void) | undefined
	action?: ((arg1: js_menu_action_event_data) => void) | undefined
	icon_svg?: string | undefined
	icon_bitmap?: size_t | undefined
	
}
    
export class menu_item_controller {
	
	set_position: ((arg1: number) => void)
	set_data: ((arg1: js_menu_data) => void)
	data: (() => js_menu_data)
	remove: (() => void)
	valid: (() => boolean)
}
    
export class menu_item_data {
	type: string
	name?: string | undefined
	
}
    
export class js_menu_context {
	folder_view?: folder_view_controller | undefined
	window_titlebar?: window_titlebar_controller | undefined
	input_box?: input_box_controller | undefined
	
}
    
export class menu_info_basic_js {
	menu: menu_controller
	context: js_menu_context
	
}
    
export class menu_controller {
	
	valid: (() => boolean)
	append_menu_after: ((arg1: js_menu_data, arg2: number) => menu_item_controller)
	append_menu: ((arg1: js_menu_data) => menu_item_controller)
	prepend_menu: ((arg1: js_menu_data) => menu_item_controller)
	close: (() => void)
	clear: (() => void)
	get_items: (() => Array<menu_item_controller>)
	get_item: ((arg1: number) => menu_item_controller)
	static add_menu_listener: ((arg1: ((arg1: menu_info_basic_js) => void)) => (() => void))
}
    
export class clipboard {
	
	static get_text: (() => string)
	static set_text: ((arg1: string) => void)
}
    
export class network {
	
	static get: ((arg1: string) => string)
	static post: ((arg1: string, arg2: string) => string)
	static get_async: ((arg1: string, arg2: ((arg1: string) => void)) => void)
	static post_async: ((arg1: string, arg2: string, arg3: ((arg1: string) => void)) => void)
}
    
export class subproc_result_data {
	out: string
	err: string
	code: number
	
}
    
export class subproc {
	
	static run: ((arg1: string) => subproc_result_data)
	static run_async: ((arg1: string, arg2: ((arg1: subproc_result_data) => void)) => void)
}
    
}
declare module "mshell" {
    export function println(...args: any[]);
    type size_t = number;
}

declare module "qjs:os" {
  import { Seek, Error } from "qjs:std";

  type Success = 0;
  type OSOperationResult = Success | Error;
  type OSOperationTuple = [str: string, error: OSOperationResult];
  type Callback = () => any;
  type TimeoutHandle = number;

  export interface File {
    close(): number;
    puts(str: string): void;
    printf(fmt: string, ...args: any[]): void;
    flush(): void;
    seek(offset: number, whence: Seek): number;
    tell(): number;
    tello(): BigInt;
    eof(): boolean | unknown;
    fileno(): unknown;
    error(): Error | unknown;
    clearerr(): void;
    read(buffer: ArrayBuffer, position: number, length: number): void;
    write(buffer: ArrayBuffer, position: number, length: number): void;
    getline(): string;
    readAsString(max_size?: number): string;
    getByte(): number;
    putByte(c: number): void;
  }

  export interface FileStatus {
    readonly dev: number;
    readonly ino: number;
    readonly mode: number;
    readonly nlink: number;
    readonly uid: number;
    readonly gid: number;
    readonly rdev: number;
    readonly size: number;
    readonly blocks: number;
    readonly atime: number;
    readonly mtime: number;
    readonly ctime: number;
  }

  export interface ExecOptions {
    block?: boolean;
    usePath?: boolean;
    file?: string;
    cwd?: string;
    stdin?: File;
    stdout?: File;
    stderr?: File;
    env?: { readonly [key: string]: string };
    uid?: number;
    gid?: number;
  }

  export class Worker {
    static parent: Worker;
    constructor(filename: string);
    postMessage(msg: any): void;
    onmessage: (data: any) => void | null;
  }

  export const SIGINT: 2;
  export const SIGABRT: 6;
  export const SIGFPE: 8;
  export const SIGILL: 4;
  export const SIGSEGV: 11;
  export const SIGTERM: 15;

  export const WNOHANG: 1;

  export const platform: "linux" | "darwin" | "win32" | "js";

  export const O_RDONLY: 0;
  export const O_WRONLY: 1;
  export const O_RDWR: 2;
  export const O_CREAT: 64;
  export const O_EXCL: 128;
  export const O_TRUNC: 512;
  export const O_APPEND: 1024;

  export function open(filename: string, flag: number, mode?: unknown): File | -1;
  export function close(file: File): number;
  export function seek(file: File, offset: number, whence: Seek): number;
  export function seek(
    file: File,
    offset: BigInt,
    whence: Seek
  ): BigInt;
  export function read(
    file: File,
    buffer: ArrayBuffer,
    offset: number,
    length: number
  ): number;
  export function write(
    file: File,
    buffer: ArrayBuffer,
    offset: number,
    length: number
  ): number;
  export function isatty(file: File): boolean;
  export function ttyGetWinSize(
    file: File
  ): [width: number, height: number] | null;
  export function ttySetRaw(file: File): void;
  export function remove(filename: string): OSOperationResult;
  export function rename(oldname: string, newname: string): OSOperationResult;
  export function realpath(path: string): OSOperationTuple;
  export function getcwd(): OSOperationTuple;
  export function chdir(path: string): OSOperationResult;
  export function mkdir(path: string, mode?: string): OSOperationResult;
  export function stat(path: string): [status: FileStatus, error: Error];
  export function lstat(path: string): [status: FileStatus, error: Error];
  export function utimes(
    path: string,
    atime: number,
    mtime: number
  ): OSOperationResult;
  export function symlink(target: string, linkpath: string): OSOperationResult;
  export function readlink(path: string): OSOperationTuple;
  export function readdir(path: string): [files: string[], error: Error];
  export function setReadHandler(file: File, cb: Callback | null): void;
  export function setReadHandler(file: File, cb: null): void;
  export function setWriteHandler(file: File, cb: Callback): void;
  export function setWriteHandler(file: File, cb: null): void;
  export function signal(signal: number, cb: Callback): void;
  export function signal(signal: number, cb: null): void;
  export function signal(signal: number, cb: undefined): void;
  export function kill(pid: number, signal: number): void;
  export function exec(args: string[], options?: ExecOptions): number;
  export function waitpid(
    pid: number,
    options: number
  ): [ret: unknown | Error, status: any];
  export function dup(file: File): void;
  export function dup2(oldFile: File, newFile: File): void;
  export function pipe(): [readFile: File, writeFile: File] | null;
  export function sleep(delay: number): void;
  export function setTimeout(cb: Callback, delay: number): TimeoutHandle;
  export function clearTimeout(handle: TimeoutHandle): void;
}

declare module "qjs:std" {
  import { File } from "qjs:os";

  export interface EvalOptions {
    backtrace_barrier?: boolean;
  }

  export interface ErrorOptions {
    errorno: Error;
  }

  export interface URLGetOptions {
    binary?: boolean;
    full?: boolean;
  }

  export interface URLGetResponse {
    readonly response: string | null;
    readonly responseHeaders: string;
    readonly status: number;
  }

  export const SEEK_SET: number; // 0
  export const SEEK_CUR: number; // 1
  export const SEEK_END: number; // 2

  export const S_IFMT: number;
  export const S_IFIFO: number;
  export const S_IFCHR: number;
  export const S_IFDIR: number;
  export const S_IFBLK: number;
  export const S_IFREG: number;
  export const S_IFSOCK: number;
  export const S_IFLNK: number;
  export const S_ISGID: number;
  export const S_ISUID: number;

  export type Seek = unknown;
  export const enum Error {
    EACCES = 13,
    EBUSY = 16,
    EEXIST = 17,
    EINVAL = 22,
    EIO = 5,
    ENOENT = 2,
    ENOSPC = 28,
    ENOSYS = 38,
    EPERM = 1,
    EPIPE = 32,
  }

  export function exit(n: number): void;
  export function evalScript(script: string, options?: EvalOptions): void;
  export function loadScript(filename: string): void;
  export function loadFile(filename: string): void;
  export function open(
    filename: string,
    flags: unknown,
    errorObj?: ErrorOptions
  ): File | null;
  export function popen(
    command: string,
    flags: unknown,
    errorObj?: ErrorOptions
  ): File | null;
  export function fdopen(
    file: File,
    flags: unknown,
    errorObj?: ErrorOptions
  ): File | null;
  export function tmpFile(errorObj?: ErrorOptions): File | null;
  export function puts(str: string): void;
  export function printf(fmt: string, ...args: any[]): void;
  export function sprintf(fmt: string, ...args: any[]): void;

  export function strerror(errorno: Error): string;
  export function gc(): void;
  export function getenv(name: string): any | undefined;
  export function setenv(name: string, value: any): void;
  export function unsetenv(name: string): void;
  export function getenviron(): { readonly [key: string]: string };
  export function urlGet(url: string): string;
  export function urlGet(
    url: string,
    options: { full?: false; binary: false }
  ): string;
  export function urlGet(
    url: string,
    options: { full?: false; binary: true }
  ): ArrayBuffer;
  export function urlGet(
    url: string,
    options: { full: true; binary?: false }
  ): URLGetResponse;
  export function urlGet(
    url: string,
    options: { full: true; binary?: false }
  ): ArrayBuffer;
  export function parseExtJSON(str: string): any;

  const _in: File;
  export { _in as in };
  export const err: File;
  export const out: File;
}