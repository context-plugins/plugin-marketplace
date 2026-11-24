import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The RPC priority to use for the stream. */
export const SpannerRpcPriority = {
  SpannerRpcPriorityUnspecified: "SPANNER_RPC_PRIORITY_UNSPECIFIED",
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type SpannerRpcPriority = (typeof SpannerRpcPriority)[keyof typeof SpannerRpcPriority] | (string & {});

export const spannerRpcPrioritySchema: EnumSchema<SpannerRpcPriority> =
  s.enumOf<SpannerRpcPriority>(SpannerRpcPriority);
