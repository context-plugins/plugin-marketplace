import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusDoiTPerfectScaleForCommitmentsGcpApiSchema,
  type StatusDoiTPerfectScaleForCommitmentsGcpApi,
} from "./status-doi-tperfect-scale-for-commitments-gcp-api.js";

export type GcpOnboardingStatusEntry = {
  /** Current onboarding lifecycle stage for this product line. */
  status: StatusDoiTPerfectScaleForCommitmentsGcpApi;
  /**
   * When PerfectScale for Commitments first began tracking commitments for this commitment type.
   * Bounds lifetime savings totals and onboarding history in the DoiT Console. Omitted or null when
   * onboarding has not started.
   */
  onboardingStartedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcpOnboardingStatusEntrySchema: Schema<GcpOnboardingStatusEntry> =
  s.object<GcpOnboardingStatusEntry>(
    {
      status: statusDoiTPerfectScaleForCommitmentsGcpApiSchema,
      onboardingStartedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
