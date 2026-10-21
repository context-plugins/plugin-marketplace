import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether this is a subsequent payment. */
export type IsSubsequentPayment3 = boolean;

export const isSubsequentPayment3Schema: Schema<IsSubsequentPayment3> = s.of<IsSubsequentPayment3>(
  s.union([s.boolean()]),
);
