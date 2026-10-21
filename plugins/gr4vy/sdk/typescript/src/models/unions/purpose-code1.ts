import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { purposeCodeSchema, type PurposeCode } from "../purpose-code.js";

/**
 * Specifies the high-level purpose of a mandate and/or payment using a set of pre-defined
 * categories. Required for the PayTo scheme, optional for all others
 */
export type PurposeCode1 = PurposeCode;

export const purposeCode1Schema: Schema<PurposeCode1> = s.of<PurposeCode1>(
  s.union([s.lazy(() => purposeCodeSchema)]),
);
