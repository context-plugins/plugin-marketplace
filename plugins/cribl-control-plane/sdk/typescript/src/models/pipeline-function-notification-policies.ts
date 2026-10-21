import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  notificationPoliciesConfiguration1Schema,
  type NotificationPoliciesConfiguration1,
} from "./notification-policies-configuration1.js";

export type PipelineFunctionNotificationPolicies = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /**
   * Identifier of the Function. Always <code>notification_policies</code>
   *
   * @default "notification_policies"
   */
  id?: "notification_policies";
  /** Brief description of the Pipeline function. */
  description?: string;
  /**
   * If <code>true</code>, disable the Pipeline function so that events are not passed through it.
   * Otherwise, <code>false</code>.
   */
  disabled?: boolean;
  /**
   * If <code>true</code>, stop passing events to downstream Pipeline Functions after the Function
   * executes. Otherwise, <code>false</code>.
   */
  final?: boolean;
  /** Configuration specific to the Pipeline Function. */
  conf: NotificationPoliciesConfiguration1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionNotificationPoliciesSchema: Schema<PipelineFunctionNotificationPolicies> =
  s.object<PipelineFunctionNotificationPolicies>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("notification_policies"), "notification_policies"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: notificationPoliciesConfiguration1Schema,
    groupId: s.optional(s.string()),
  });
