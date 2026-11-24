import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defaults to STANDARD. Set to CREDIT for customer-authored, term-bound discount lines whose
 * amounts contribute negatively to invoice aggregates.
 */
export const WritableOrderLineType = {
  Standard: "STANDARD",
  Credit: "CREDIT",
} as const;
export type WritableOrderLineType =
  | (typeof WritableOrderLineType)[keyof typeof WritableOrderLineType]
  | (string & {});

export const writableOrderLineTypeSchema: EnumSchema<WritableOrderLineType> =
  s.enumOf<WritableOrderLineType>(WritableOrderLineType);
