import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of source. Currently only the source type `organization` is supported. */
export const RefundRoutingReversalsSourceType = {
  Organization: "organization",
} as const;
export type RefundRoutingReversalsSourceType =
  | (typeof RefundRoutingReversalsSourceType)[keyof typeof RefundRoutingReversalsSourceType]
  | (string & {});

export const refundRoutingReversalsSourceTypeSchema: EnumSchema<RefundRoutingReversalsSourceType> =
  s.enumOf<RefundRoutingReversalsSourceType>(RefundRoutingReversalsSourceType);
