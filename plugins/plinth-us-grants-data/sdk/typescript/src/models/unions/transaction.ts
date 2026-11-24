import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Transaction = string;

export const transactionSchema: Schema<Transaction> = s.of<Transaction>(s.union([s.string()]));
