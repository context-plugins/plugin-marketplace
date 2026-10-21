import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount51Schema, type Amount51 } from "./amount51.js";

/** The balance of the business account. */
export type Balance = {
  /** The total available balance of the business account. */
  total: Amount51;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>({
  total: amount51Schema,
});
