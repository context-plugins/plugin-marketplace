import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditsInternalSchema, creditsSchema, type Credits } from "./credits.js";
import { keySchema, type Key } from "./key.js";
import { planSchema, type Plan } from "./plan.js";
import { rateLimitInternalSchema, rateLimitSchema, type RateLimit } from "./rate-limit.js";

/** Authenticated account snapshot (§F1): plan, key env, credit balance and rate limit. */
export type Account = {
  plan: Plan;
  key: Key;
  credits: Credits;
  rateLimit: RateLimit;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountProperties: s.Shape<Account> = {
  plan: planSchema,
  key: keySchema,
  credits: creditsInternalSchema,
  rateLimit: rateLimitInternalSchema,
};

export const accountInternalSchema: Schema<Account> = s.object<Account>(accountProperties, {
  additionalProperties: s.json(),
});

export const accountSchema: Schema<Account> = s.lazySchema(() =>
  s.object<Account>(
    {
      ...accountProperties,
      credits: creditsSchema,
      rateLimit: rateLimitSchema,
    },
    { additionalProperties: s.json() },
  ),
);
