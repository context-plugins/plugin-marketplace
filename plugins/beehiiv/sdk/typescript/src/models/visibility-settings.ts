import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conditionSetOperator2Schema, type ConditionSetOperator2 } from "./condition-set-operator2.js";
import { referralCondition2Schema, type ReferralCondition2 } from "./referral-condition2.js";

export type VisibilitySettings = {
  /** Whether to show the block on the web. */
  showOnWeb?: boolean;
  /** Whether to show the block on the email. */
  showOnEmail?: boolean;
  /** Whether to show the block to anonymous users on the web. */
  showToAnonymousUsersWeb?: boolean;
  /** Whether to show the block to free subscribers. */
  showToFreeSubscribers?: boolean;
  /** Whether to show the block to paid subscribers. */
  showToPaidSubscribers?: boolean;
  /** The exact referral count required to show the block to subscribers. */
  showToSubscribersWithReferralValue?: number;
  /** The condition required to show the block to subscribers. */
  showToSubscribersWithReferralCondition?: ReferralCondition2;
  /**
   * An optional list of condition set UUIDs to gate this block behind dynamic content targeting.
   * When provided, only subscribers matching the specified condition sets will see this block.
   * Condition sets must belong to the same publication and be active.
   */
  conditionSetIds?: string[];
  /**
   * Instructs how to combine multiple condition sets. Defaults to "or" (subscriber can match any
   * condition). Use "and" to show the block if the subscriber meets all conditions.
   */
  conditionSetOperator?: ConditionSetOperator2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const visibilitySettingsSchema: Schema<VisibilitySettings> = s.object<VisibilitySettings>(
  {
    showOnWeb: s.optional(s.boolean()),
    showOnEmail: s.optional(s.boolean()),
    showToAnonymousUsersWeb: s.optional(s.boolean()),
    showToFreeSubscribers: s.optional(s.boolean()),
    showToPaidSubscribers: s.optional(s.boolean()),
    showToSubscribersWithReferralValue: s.optional(s.int()),
    showToSubscribersWithReferralCondition: s.optional(s.lazy(() => referralCondition2Schema)),
    conditionSetIds: s.optional(s.array(s.string())),
    conditionSetOperator: s.optional(s.lazy(() => conditionSetOperator2Schema)),
    _keysMap: {
      showOnWeb: "show_on_web",
      showOnEmail: "show_on_email",
      showToAnonymousUsersWeb: "show_to_anonymous_users_web",
      showToFreeSubscribers: "show_to_free_subscribers",
      showToPaidSubscribers: "show_to_paid_subscribers",
      showToSubscribersWithReferralValue: "show_to_subscribers_with_referral_value",
      showToSubscribersWithReferralCondition: "show_to_subscribers_with_referral_condition",
      conditionSetIds: "condition_set_ids",
      conditionSetOperator: "condition_set_operator",
    },
  },
  { additionalProperties: s.json() },
);
