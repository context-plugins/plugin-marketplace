import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionResponseSchema, type TransactionResponse } from "./transaction-response.js";

export type Embedded39 = {
  /** An array of transaction objects. */
  transactions?: TransactionResponse[];
};

export const embedded39Schema: Schema<Embedded39> = s.object<Embedded39>({
  transactions: s.optional(s.array(s.lazy(() => transactionResponseSchema))),
});
