import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MercariResponse11 = {
  /** @default "quota_exceeded" */
  code?: "quota_exceeded";
  error: string;
  plan: string;
  limit: number;
  used: number;
  /** @default 0 */
  remaining?: 0;
  resetAt: string;
  retryAfter: number;
  upgradeUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MercariResponse11Schema: Schema<V1MercariResponse11> = s.object<V1MercariResponse11>(
  {
    code: s.defaulted(s.literal("quota_exceeded"), "quota_exceeded"),
    error: s.string(),
    plan: s.string(),
    limit: s.float64(),
    used: s.float64(),
    remaining: s.defaulted(s.literal(0), 0),
    resetAt: s.string(),
    retryAfter: s.float64(),
    upgradeUrl: s.string(),
    _keysMap: {
      resetAt: "reset_at",
      retryAfter: "retry_after",
      upgradeUrl: "upgrade_url",
    },
  },
  { additionalProperties: s.json() },
);
