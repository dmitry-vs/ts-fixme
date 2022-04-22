// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

// Это сложное (если не супер сложное) задание
// Задача состоит в том что написать калькулятор для натуральных чисел, но только на типах!
// Ниже приведена заготовка
// Хочется поддержки сложения и вычитания, если хочется еще челленджа, то деление и умножение
// Из-за ограничений глубины вычислений поддержать все натуральные числа не получится, это нормально
type Equals<A, B> = A extends B ? (B extends A ? "success" : never) : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Add<A, B> = FIXME;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Subtract<A, B> = FIXME;

export type OnePlusOneTest = Equals<Add<1, 1>, 2>;
export type TwoMinusOneTest = Equals<Subtract<2, 1>, 1>;
