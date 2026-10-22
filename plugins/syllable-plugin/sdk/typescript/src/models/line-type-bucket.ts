import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Friendly line-type buckets a campaign can be restricted to dial.
 *
 * These map to raw Twilio Lookup v2 line types via
 * ``lib.twilio.line_type_lookup.LINE_TYPE_BUCKETS``.
 */
export const LineTypeBucket = {
  Mobile: "mobile",
  Landline: "landline",
  Voip: "voip",
} as const;
export type LineTypeBucket = (typeof LineTypeBucket)[keyof typeof LineTypeBucket] | (string & {});

export const lineTypeBucketSchema: EnumSchema<LineTypeBucket> = s.enumOf<LineTypeBucket>(LineTypeBucket);
