import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { policySchema, type Policy } from "./policy.js";

export type NotificationPoliciesConfiguration = {
  /** List of notification routing policies evaluated in order */
  policies?: Policy[];
};

export const notificationPoliciesConfigurationSchema: Schema<NotificationPoliciesConfiguration> =
  s.object<NotificationPoliciesConfiguration>({
    policies: s.optional(s.array(s.lazy(() => policySchema))),
  });
