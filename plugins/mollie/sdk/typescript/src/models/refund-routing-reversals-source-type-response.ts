import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of source. Currently only the source type `organization` is supported. */
export const RefundRoutingReversalsSourceTypeResponse = {
  Organization: "organization",
} as const;
export type RefundRoutingReversalsSourceTypeResponse =
  | (typeof RefundRoutingReversalsSourceTypeResponse)[keyof typeof RefundRoutingReversalsSourceTypeResponse]
  | (string & {});

export const refundRoutingReversalsSourceTypeResponseSchema: EnumSchema<RefundRoutingReversalsSourceTypeResponse> =
  s.enumOf<RefundRoutingReversalsSourceTypeResponse>(RefundRoutingReversalsSourceTypeResponse);
