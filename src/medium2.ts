// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
import React from "react";

type ComponentDefaultProps<T> = T extends { defaultProps: infer D }
  ? D
  : unknown;

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): ComponentDefaultProps<React.ComponentType<T>> => {
  return component.defaultProps;
};
