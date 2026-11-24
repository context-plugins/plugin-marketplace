import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CashBreakdown = {
  openingBalance?: number;
  addedToday?: number;
  withdrawnToday?: number;
  amountFromStockSale?: number;
  unpaidCharges?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cashBreakdownSchema: Schema<CashBreakdown> = s.object<CashBreakdown>(
  {
    openingBalance: s.optional(s.float64()),
    addedToday: s.optional(s.float64()),
    withdrawnToday: s.optional(s.float64()),
    amountFromStockSale: s.optional(s.float64()),
    unpaidCharges: s.optional(s.float64()),
    _keysMap: {
      openingBalance: "opening_balance",
      addedToday: "added_today",
      withdrawnToday: "withdrawn_today",
      amountFromStockSale: "amount_from_stock_sale",
      unpaidCharges: "unpaid_charges",
    },
  },
  { additionalProperties: s.json() },
);
