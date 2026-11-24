import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditUsageSchema, type CreditUsage } from "./credit-usage.js";
import { rateLimitSchema, type RateLimit } from "./rate-limit.js";
import { stateEnumSchema, type StateEnum } from "./state-enum.js";

export type UserModel = {
  /** RocketReach internal unique user ID */
  id?: number;
  /** First name of the user */
  firstName?: string | null;
  /** Last name of the user */
  lastName?: string | null;
  /** Email for the user */
  email?: string | null;
  state?: StateEnum;
  creditUsage?: CreditUsage[];
  rateLimits?: RateLimit[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userModelProperties: s.Shape<UserModel> = {
  id: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  state: s.optional(s.lazy(() => stateEnumSchema)),
  creditUsage: s.optional(s.array(s.lazy(() => creditUsageSchema))),
  rateLimits: s.optional(s.array(s.lazy(() => rateLimitSchema))),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    creditUsage: "credit_usage",
    rateLimits: "rate_limits",
  },
};

export const userModelInternalSchema: Schema<UserModel> = s.object<UserModel>(userModelProperties, {
  additionalProperties: s.json(),
});

export const userModelSchema: Schema<UserModel> = s.lazySchema(() =>
  s.object<UserModel>(
    {
      ...userModelProperties,
      firstName: s.optionalNullable(s.string().check(s.maxLength(32))),
      lastName: s.optionalNullable(s.string().check(s.maxLength(32))),
      email: s.optionalNullable(s.string().check(s.maxLength(128))),
    },
    { additionalProperties: s.json() },
  ),
);
