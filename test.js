import * as shell from "mshell"
import * as std from "std"
import * as os from "os"
try {

    shell.println("Hello, world!")
    shell.println(Object.keys(os))
    shell.menu_controller.add_menu_listener((a) => {
        // print call stack
        shell.println(123, new Error().stack, a)
        // shell.println(
        //     a.menu?.get_menu_items()[0].name,
        //     a.menu?.get_menu_items()[0].type,
        // )
        const menus = a.menu?.get_menu_items()
        // append after `复制`
        const index = menus?.findIndex((item) => item.name === "复制")
        a.menu?.add_menu_item_after({
            type: 'button',
            name: 'test',
            action: ()=>{
                shell.println(123)
            }
        }, index)
    })

    os.setTimeout(() => {
        shell.println("timeout")
    }, 100)
} catch (e) {
    shell.println("Error: " + e);
    if (e.stack) {
        shell.println("Stack: " + e.stack);
    }
}