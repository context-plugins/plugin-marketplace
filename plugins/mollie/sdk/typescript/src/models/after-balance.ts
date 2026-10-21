import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount52Schema, type Amount52 } from "./amount52.js";

/** The balance of the business account after this transaction was processed. */
export type AfterBalance = {
  /** The total balance of the business account after this transaction. */
  total: Amount52;
};

export const afterBalanceSchema: Schema<AfterBalance> = s.object<AfterBalance>({
  total: amount52Schema,
});
