//rect-test.ts
class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        //方法 area 返回值类型声明为 number 类型
        return this.width * this.height;
    }
    perimeter() {
        //方法 perimeter 返回值类型声明为 number 类型
        return (this.width + this.height) * 2;
    }
}
let a = 1; //变量 a 类型推导为 number 类型
a = ''; //字符串赋值给 number 类型，会报错
function func(param) {
    //无返回值的方法，返回值类型为 void
    const instA = new Rect(param.w, param.h);
    console.log(instA.area());
    console.log(instA.perimeter());
}
func({ w: 1, h: 2 });
func({ w: 1, h: '3' }); //参数类型不匹配，会报错
