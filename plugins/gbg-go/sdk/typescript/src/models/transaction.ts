import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transaction = {
  id: string;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  id: s.string(),
});
