import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sslInspectionSchema, type SslInspection } from "./ssl-inspection.js";

/** Summary of a policy */
export type Policy = {
  /** Unique name of the policy within the tenant */
  policyName: string;
  /** ISO-8601 timestamp of the last policy modification */
  updatedAt: Date;
  /**
   * Effective SSL inspection status for this policy. If SSL inspection is not explicitly configured
   * on this policy, the value is inherited from the Base Policy.
   */
  sslInspection: SslInspection;
  /**
   * Number of users/groups who have this policy as a conflicting assignment. Not present for the
   * Base Policy.
   */
  clashCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policySchema: Schema<Policy> = s.object<Policy>(
  {
    policyName: s.string(),
    updatedAt: s.dateTime(),
    sslInspection: sslInspectionSchema,
    clashCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
