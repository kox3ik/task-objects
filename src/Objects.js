import { ADDRGETNETWORKPARAMS } from 'dns';
import { ListFormat } from 'typescript';
export function personUpdate(data) {
    if (data.gender.includes('female')) delete data.age;
    else if (!data.income) data.income = 100000;
    return data;
}
export function objectFieldsList(obj1, obj2, obj3) {
    let str = [];
    for (let key in obj1) str.push(`${key}`);
    for (let key in obj2) str.push(`${key}`);
    for (let key in obj3) str.push(`${key}`);
    str.sort();
    return str;
}
export function objectClone(obj, count) {
    let arr = [];
    let tmp = { ...obj.obj };
    for (let i = 0; i < count; i++) {
        let obj1 = { ...obj, id: i };
        let keys = Object.keys(obj1);
        for (let i = 0; i < keys.length; i++)
            if (typeof obj1[keys[i]] == 'object')
                obj1[keys[i]] = { ...obj1[keys[i]] };
        arr.push(obj1);
    }
    return arr;
}
