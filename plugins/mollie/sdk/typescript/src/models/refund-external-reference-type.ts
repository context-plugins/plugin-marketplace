import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the reference type */
export const RefundExternalReferenceType = {
  AcquirerReference: "acquirer-reference",
} as const;
export type RefundExternalReferenceType =
  | (typeof RefundExternalReferenceType)[keyof typeof RefundExternalReferenceType]
  | (string & {});

export const refundExternalReferenceTypeSchema: EnumSchema<RefundExternalReferenceType> =
  s.enumOf<RefundExternalReferenceType>(RefundExternalReferenceType);
