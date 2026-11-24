import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spendIntervalSchema, type SpendInterval } from "./spend-interval.js";
import { spendLimitActionSchema, type SpendLimitAction } from "./spend-limit-action.js";
import { amountUsdInternalSchema, amountUsdSchema, type AmountUsd } from "./unions/amount-usd.js";
import { apiKeyIdSchema, type ApiKeyId } from "./unions/api-key-id.js";
import { membershipIdSchema, type MembershipId } from "./unions/membership-id.js";
import { parentLimitIdSchema, type ParentLimitId } from "./unions/parent-limit-id.js";
import {
  thresholdPercent1InternalSchema,
  thresholdPercent1Schema,
  type ThresholdPercent1,
} from "./unions/threshold-percent1.js";

/**
 * Create an absolute limit or a percentage alert.
 *
 * Set one scope ID for an API-key or membership limit, or neither for a team limit. Percentage
 * alerts set ``parent_limit_id`` and ``threshold_percent``; their interval must match the parent
 * and their amount is inherited.
 */
export type SpendLimitCreateRequest = {
  apiKeyId?: ApiKeyId;
  membershipId?: MembershipId;
  parentLimitId?: ParentLimitId;
  thresholdPercent?: ThresholdPercent1;
  interval: SpendInterval;
  amountUsd?: AmountUsd;
  action: SpendLimitAction;
  /** @default true */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const spendLimitCreateRequestProperties: s.Shape<SpendLimitCreateRequest> = {
  apiKeyId: s.optional(s.lazy(() => apiKeyIdSchema)),
  membershipId: s.optional(s.lazy(() => membershipIdSchema)),
  parentLimitId: s.optional(s.lazy(() => parentLimitIdSchema)),
  thresholdPercent: s.optional(s.lazy(() => thresholdPercent1InternalSchema)),
  interval: spendIntervalSchema,
  amountUsd: s.optional(s.lazy(() => amountUsdInternalSchema)),
  action: spendLimitActionSchema,
  enabled: s.defaulted(s.boolean(), true),
  _keysMap: {
    apiKeyId: "api_key_id",
    membershipId: "membership_id",
    parentLimitId: "parent_limit_id",
    thresholdPercent: "threshold_percent",
    amountUsd: "amount_usd",
  },
};

export const spendLimitCreateRequestInternalSchema: Schema<SpendLimitCreateRequest> =
  s.object<SpendLimitCreateRequest>(spendLimitCreateRequestProperties, { additionalProperties: s.json() });

export const spendLimitCreateRequestSchema: Schema<SpendLimitCreateRequest> = s.lazySchema(() =>
  s.object<SpendLimitCreateRequest>(
    {
      ...spendLimitCreateRequestProperties,
      thresholdPercent: s.optional(s.lazy(() => thresholdPercent1Schema)),
      amountUsd: s.optional(s.lazy(() => amountUsdSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
