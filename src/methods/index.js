import { on } from '~/event/customEvent'
import getChecked from '~/methods/getChecked'
import append from '~/methods/append'
import updateKeySelf from '~/methods/updateKeySelf'
import setChecked from '~/methods/setChecked'
import unChecked from '~/methods/unChecked'
import expandAll from '~/methods/expandAll'
import unExpandAll from '~/methods/unExpandAll'
import remove from '~/methods/remove'
import insert from '~/methods/insert'
import reload from '~/methods/reload'
import search from '~/methods/search'
export default function() {
    //函数内部第一个参数为当前methods方法，后续参数为传入的参数，函数内部返回methods方法即可实现链式调用
    let methods = {
        on: (...args)=>on.call(this, methods, ...args),
        getChecked: (...args)=>getChecked.call(this, methods, ...args),
        setChecked: (...args)=>setChecked.call(this, methods, ...args),
        unChecked: (...args)=>unChecked.call(this, methods, ...args),

        expandAll: (...args)=>expandAll.call(this, methods, ...args),
        unExpandAll: (...args)=>unExpandAll.call(this, methods, ...args),

        append: (...args)=>append.call(this, methods, ...args),
        updateKeySelf: (...args)=>updateKeySelf.call(this, methods, ...args),
        remove: (...args)=>remove.call(this, methods, ...args),
        insert: (...args)=>insert.call(this, methods, ...args),
        reload: (...args)=>reload.call(this, methods, ...args),

        search: (...args)=>search.call(this, methods, ...args),
    }
    return methods
}