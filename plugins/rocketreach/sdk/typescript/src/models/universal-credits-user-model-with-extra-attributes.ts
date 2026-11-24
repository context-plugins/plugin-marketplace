import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { plan2InternalSchema, plan2Schema, type Plan2 } from "./plan2.js";
import { rateLimitSchema, type RateLimit } from "./rate-limit.js";
import { stateEnumSchema, type StateEnum } from "./state-enum.js";
import {
  universalCreditUsageByActionSchema,
  type UniversalCreditUsageByAction,
} from "./universal-credit-usage-by-action.js";
import { universalCreditUsageSchema, type UniversalCreditUsage } from "./universal-credit-usage.js";

export type UniversalCreditsUserModelWithExtraAttributes = {
  /** RocketReach internal unique user ID */
  id?: number;
  /** First name of the user */
  firstName?: string | null;
  /** Last name of the user */
  lastName?: string | null;
  /** Email for the user */
  email?: string | null;
  state?: StateEnum;
  /** Object representing the user's plan */
  plan?: Plan2;
  /** API Key for the user */
  apiKey?: string;
  apiKeyDomain?: string | null;
  /** Number of API calls made today by the user */
  dailyApiNumCalls?: number | null;
  /** Maximum number of daily API calls for the user */
  dailyApiLimit?: string;
  /** Objects representing the user's credit usage */
  creditUsage?: UniversalCreditUsage;
  /** Objects representing the user's credit usage by credit_action type */
  creditUsageByAction?: UniversalCreditUsageByAction[];
  /** Objects representing the user's rate limits by request type */
  rateLimits?: RateLimit[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const universalCreditsUserModelWithExtraAttributesProperties: s.Shape<UniversalCreditsUserModelWithExtraAttributes> =
  {
    id: s.optional(s.int()),
    firstName: s.optionalNullable(s.string()),
    lastName: s.optionalNullable(s.string()),
    email: s.optionalNullable(s.string()),
    state: s.optional(s.lazy(() => stateEnumSchema)),
    plan: s.optional(s.lazy(() => plan2InternalSchema)),
    apiKey: s.optional(s.string()),
    apiKeyDomain: s.optionalNullable(s.string()),
    dailyApiNumCalls: s.optionalNullable(s.int()),
    dailyApiLimit: s.optional(s.string()),
    creditUsage: s.optional(s.lazy(() => universalCreditUsageSchema)),
    creditUsageByAction: s.optional(s.array(s.lazy(() => universalCreditUsageByActionSchema))),
    rateLimits: s.optional(s.array(s.lazy(() => rateLimitSchema))),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      apiKey: "api_key",
      apiKeyDomain: "api_key_domain",
      dailyApiNumCalls: "daily_api_num_calls",
      dailyApiLimit: "daily_api_limit",
      creditUsage: "credit_usage",
      creditUsageByAction: "credit_usage_by_action",
      rateLimits: "rate_limits",
    },
  };

export const universalCreditsUserModelWithExtraAttributesInternalSchema: Schema<UniversalCreditsUserModelWithExtraAttributes> =
  s.object<UniversalCreditsUserModelWithExtraAttributes>(
    universalCreditsUserModelWithExtraAttributesProperties,
    { additionalProperties: s.json() },
  );

export const universalCreditsUserModelWithExtraAttributesSchema: Schema<UniversalCreditsUserModelWithExtraAttributes> =
  s.lazySchema(() =>
    s.object<UniversalCreditsUserModelWithExtraAttributes>(
      {
        ...universalCreditsUserModelWithExtraAttributesProperties,
        firstName: s.optionalNullable(s.string().check(s.maxLength(32))),
        lastName: s.optionalNullable(s.string().check(s.maxLength(32))),
        email: s.optionalNullable(s.string().check(s.maxLength(128))),
        plan: s.optional(s.lazy(() => plan2Schema)),
        apiKeyDomain: s.optionalNullable(s.string().check(s.maxLength(256))),
        dailyApiNumCalls: s.optionalNullable(s.int().check(s.gte(-2147483648), s.lte(2147483647))),
      },
      { additionalProperties: s.json() },
    ),
  );
