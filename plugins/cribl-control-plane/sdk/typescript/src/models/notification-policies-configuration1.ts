import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { policySchema, type Policy } from "./policy.js";

/** Configuration specific to the Pipeline Function. */
export type NotificationPoliciesConfiguration1 = {
  /** List of notification routing policies evaluated in order */
  policies?: Policy[];
};

export const notificationPoliciesConfiguration1Schema: Schema<NotificationPoliciesConfiguration1> =
  s.object<NotificationPoliciesConfiguration1>({
    policies: s.optional(s.array(s.lazy(() => policySchema))),
  });
