import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type TransfersFeesResponse = {
  transactions?: Transaction[];
  total?: number;
};

export const transfersFeesResponseSchema: Schema<TransfersFeesResponse> = s.object<TransfersFeesResponse>({
  transactions: s.optional(s.array(s.lazy(() => transactionSchema))),
  total: s.optional(s.int()),
});
