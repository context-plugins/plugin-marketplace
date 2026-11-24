import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spendIntervalSchema, type SpendInterval } from "./spend-interval.js";
import { spendLimitActionSchema, type SpendLimitAction } from "./spend-limit-action.js";
import { apiKeyIdSchema, type ApiKeyId } from "./unions/api-key-id.js";
import { apiKeyNameSchema, type ApiKeyName } from "./unions/api-key-name.js";
import { memberNameSchema, type MemberName } from "./unions/member-name.js";
import { membershipIdSchema, type MembershipId } from "./unions/membership-id.js";
import { parentLimitIdSchema, type ParentLimitId } from "./unions/parent-limit-id.js";
import { resetAtSchema, type ResetAt } from "./unions/reset-at.js";
import { thresholdPercentSchema, type ThresholdPercent } from "./unions/threshold-percent.js";

/**
 * One limit with its current spend-window total.
 *
 * API-key and membership limits use their corresponding ID. Team limits have neither; percentage
 * alerts additionally identify their parent team limit. ``period_start`` is the window opening
 * (calendar start or last reset); ``period_end`` is the next calendar boundary.
 */
export type SpendLimitItem = {
  id: string;
  apiKeyId: ApiKeyId;
  apiKeyName: ApiKeyName;
  membershipId: MembershipId;
  memberName: MemberName;
  parentLimitId: ParentLimitId;
  thresholdPercent: ThresholdPercent;
  interval: SpendInterval;
  amountUsd: string;
  action: SpendLimitAction;
  enabled: boolean;
  spendUsd: string;
  periodStart: string;
  periodEnd: string;
  resetAt: ResetAt;
  editable: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spendLimitItemSchema: Schema<SpendLimitItem> = s.object<SpendLimitItem>(
  {
    id: s.string(),
    apiKeyId: apiKeyIdSchema,
    apiKeyName: apiKeyNameSchema,
    membershipId: membershipIdSchema,
    memberName: memberNameSchema,
    parentLimitId: parentLimitIdSchema,
    thresholdPercent: thresholdPercentSchema,
    interval: spendIntervalSchema,
    amountUsd: s.string(),
    action: spendLimitActionSchema,
    enabled: s.boolean(),
    spendUsd: s.string(),
    periodStart: s.string(),
    periodEnd: s.string(),
    resetAt: resetAtSchema,
    editable: s.boolean(),
    _keysMap: {
      apiKeyId: "api_key_id",
      apiKeyName: "api_key_name",
      membershipId: "membership_id",
      memberName: "member_name",
      parentLimitId: "parent_limit_id",
      thresholdPercent: "threshold_percent",
      amountUsd: "amount_usd",
      spendUsd: "spend_usd",
      periodStart: "period_start",
      periodEnd: "period_end",
      resetAt: "reset_at",
    },
  },
  { additionalProperties: s.json() },
);
