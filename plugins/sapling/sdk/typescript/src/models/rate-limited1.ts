import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RateLimited1 = {
  /** Human-readable error message. */
  msg: string;
  /** Seconds until the request would fit the bucket. Absent when it never can. */
  retryAfter?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimited1Schema: Schema<RateLimited1> = s.object<RateLimited1>(
  {
    msg: s.string(),
    retryAfter: s.optional(s.float64()),
    _keysMap: {
      retryAfter: "retry_after",
    },
  },
  { additionalProperties: s.json() },
);
