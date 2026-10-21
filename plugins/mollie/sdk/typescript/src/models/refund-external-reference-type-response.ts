import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the reference type */
export const RefundExternalReferenceTypeResponse = {
  AcquirerReference: "acquirer-reference",
} as const;
export type RefundExternalReferenceTypeResponse =
  | (typeof RefundExternalReferenceTypeResponse)[keyof typeof RefundExternalReferenceTypeResponse]
  | (string & {});

export const refundExternalReferenceTypeResponseSchema: EnumSchema<RefundExternalReferenceTypeResponse> =
  s.enumOf<RefundExternalReferenceTypeResponse>(RefundExternalReferenceTypeResponse);
