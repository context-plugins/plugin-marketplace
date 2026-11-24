import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsOnboardingStatusEntrySchema,
  type AwsOnboardingStatusEntry,
} from "./aws-onboarding-status-entry.js";

/**
 * PerfectScale for Commitments onboarding status for each commitment type on the AWS organization
 * (`compute`, `database`). A commitment type is omitted when it is not onboarded. When `done`,
 * inventory and recommendations for that commitment type are available.
 */
export type AwsOnboardingStatus = {
  compute?: AwsOnboardingStatusEntry;
  database?: AwsOnboardingStatusEntry;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsOnboardingStatusSchema: Schema<AwsOnboardingStatus> = s.object<AwsOnboardingStatus>(
  {
    compute: s.optional(s.lazy(() => awsOnboardingStatusEntrySchema)),
    database: s.optional(s.lazy(() => awsOnboardingStatusEntrySchema)),
  },
  { additionalProperties: s.json() },
);
