type FIXME = Array<Exclude<OrderState, "buyingSupplies" | "producing">>;
type FixmeElement = FIXME extends readonly (infer T)[] ? T : never;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  orderStates.filter(
    (state): state is FixmeElement =>
      state !== "buyingSupplies" && state !== "producing"
  );
