// const a: "foo" = "foo"
// // const b: "bar" = "foo"
// const b: string = a
// console.log(b)


// interface MyObj {
//     foo: string;
//     bar: number;
// }
// const aa: MyObj = {
//     foo: 'foo',
//     bar: 3.
// }
// console.log(aa)


// interface MyObj {
//     foo: string;
//     bar: number;
// }
// interface MyObj2 {
//     foo: string;
// }
// const a: MyObj = {foo: 'foo', bar: 3}
// const b: MyObj2 = a
// console.log(b)


// interface MyFoo {
//     method: () => void;
// }
// class Foo {
//     method(): void {
//         console.log("Hello world.")
//     }
// }

// const obj: MyFoo = new Foo();
// const obj2: Foo = obj;


// interface Foo<S, T> {
//     foo: S;
//     bar: T;
// }
// const obj: Foo<number, string> = {
//     foo: 3,
//     bar: 'hi',
// }


// class Foo<T> {
//     constructor(obj: T) {}
// }
// const obj1: Foo<string> = new Foo<string>('foo')
// function func<T>(obj: T): void {}
// func<number>(3)


// function func<T>(obj: T) {}
// const f: <T>(obj: T) => void = func;


// function identity<T>(value: T): T {
//     return value
// }
// const value = identity(3)
// const str: string = value


// const foo: [string, number] = ['foo', 5]
// const str: string = foo[0]
// console.log(str)
// function makePair(x: string, y: number): [string, number] {
//     return [x, y]
// }


// const tuple: [string, number] = ['foo', 3]
// tuple.pop()
// tuple.push('hey')
// console.log(tuple)
// // cont num: number = tuple[1]
// const unit: [] = []


// type NumAndStrings = [number, ...string[]]
// const a1: NumAndStrings = [3, 'foo', 'bar']
// console.log(a1)
// const a2: NumAndStrings = [5]
// console.log(a2)
// // const a3: NumAndStrings = ['foo', 'bar']


// type T = [string, ?]
// const t1: T = ['foo']
// const t2: T = ['foo', 3]


// type Args = [string, number, boolean]
// const func = (...args: Args) => args[1]
// const v = func('foo', 3, true)
// console.log(typeof v)


// type Args = [string, ...number[]]
// const func = (f: string, ...args: Args) => args[0]
// const v1 = func('foo', 'bar')
// const v2 = func('foo', 'bar', 1, 2, 3)
// console.log(v1)
// console.log(v2)


// const func = (...args: string[]) => args[0]
// const strings: string[] = ['foo', 'bar', 'baz']
// const v = func(...strings)
// console.log(v)


// function bind<T, U extends any[], R>(
//     func: (arg1: T, ...rest: U) => R,
//     value: T,
// ): ((...args: U) => R) {
//     return (...args: U) => func(value, ...args)
// }
// const add = (x: number, y: number) => x + y
// const add1 = bind(add, 1)
// console.log(add1(5))


// let value: string | number = 'foo'
// value = 100
// value = 'foo'
// console.log(value)
// value = true


// interface Hoge {
//     foo: string;
//     bar: number;
// }
// interface Piyo {
//     foo: number;
//     baz: boolean;
// }
// type HogePiyo = Hoge | Piyo
// const obj: HogePiyo = {
//     foo: 'hello',
//     bar: 0,
// }


// interface Hoge {
//     foo: string;
//     bar: number;
// }
// interface Piyo {
//     foo: number;
//     baz: boolean;
// }
// function useHogePiyo(obj: Hoge | Piyo): void {
//     if ('bar' in obj) {
//         console.log('Hoge', obj.bar)
//     } else {
//         console.log('Piyo', obj.baz)
//     }
// }


// function getName(id?: string): string {
//     return "hoge"
// }
// const n = getName("xxx")
// console.log(n.length)
// function getName(id: string = "xxx"): string {
//     return "hoge"
// }


// const n: never = 1;
// declare const n: never
// const foo: string = n


// interface Hoge {
//     foo: string;
//     bar: number;
// }
// interface Piyo {
//     foo: string;
//     baz: boolean;
// }
// const obj: Hoge & Piyo = {
//     foo: 'foooo',
//     bar: 3,
//     baz: true,
// }
// console.log(obj)



