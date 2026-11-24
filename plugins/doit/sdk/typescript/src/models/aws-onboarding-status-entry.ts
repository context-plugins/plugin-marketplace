import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1DoiTPerfectScaleForCommitmentsAwsApiSchema,
  type Status1DoiTPerfectScaleForCommitmentsAwsApi,
} from "./status1-doi-tperfect-scale-for-commitments-aws-api.js";

export type AwsOnboardingStatusEntry = {
  /** Current onboarding lifecycle stage for this product line. */
  status: Status1DoiTPerfectScaleForCommitmentsAwsApi;
  /**
   * When PerfectScale for Commitments first began tracking commitments for this commitment type.
   * Bounds lifetime savings totals and onboarding history in the DoiT Console. Omitted or null when
   * onboarding has not started.
   */
  onboardingStartedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsOnboardingStatusEntrySchema: Schema<AwsOnboardingStatusEntry> =
  s.object<AwsOnboardingStatusEntry>(
    {
      status: status1DoiTPerfectScaleForCommitmentsAwsApiSchema,
      onboardingStartedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
