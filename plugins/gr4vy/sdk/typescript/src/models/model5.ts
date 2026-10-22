import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The report model type. */
export const Model5 = {
  TransactionRetries: "transaction_retries",
} as const;
export type Model5 = (typeof Model5)[keyof typeof Model5] | (string & {});

export const model5Schema: EnumSchema<Model5> = s.enumOf<Model5>(Model5);
