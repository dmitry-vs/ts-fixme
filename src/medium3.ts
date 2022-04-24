type UserOrderState = Exclude<OrderState, "buyingSupplies" | "producing">;
type UserOrderStates = Array<UserOrderState>;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (
  orderStates: OrderState[]
): UserOrderStates =>
  orderStates.filter(
    (state): state is UserOrderState =>
      state !== "buyingSupplies" && state !== "producing"
  );
