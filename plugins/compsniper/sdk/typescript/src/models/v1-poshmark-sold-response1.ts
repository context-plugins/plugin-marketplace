import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PoshmarkSoldResponse1 = {
  /** @default "rate_limited" */
  code?: "rate_limited";
  error: string;
  plan: string;
  limit: number;
  /** @default 0 */
  remaining?: 0;
  retryAfter: number;
  reset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PoshmarkSoldResponse1Schema: Schema<V1PoshmarkSoldResponse1> =
  s.object<V1PoshmarkSoldResponse1>(
    {
      code: s.defaulted(s.literal("rate_limited"), "rate_limited"),
      error: s.string(),
      plan: s.string(),
      limit: s.float64(),
      remaining: s.defaulted(s.literal(0), 0),
      retryAfter: s.float64(),
      reset: s.float64(),
      _keysMap: {
        retryAfter: "retry_after",
      },
    },
    { additionalProperties: s.json() },
  );
