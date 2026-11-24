import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  service1DoiTPerfectScaleForCommitmentsGcpApiSchema,
  type Service1DoiTPerfectScaleForCommitmentsGcpApi,
} from "./service1-doi-tperfect-scale-for-commitments-gcp-api.js";
import {
  statusDoiTPerfectScaleForCommitmentsGcpApiSchema,
  type StatusDoiTPerfectScaleForCommitmentsGcpApi,
} from "./status-doi-tperfect-scale-for-commitments-gcp-api.js";

/**
 * Onboarding status entry for one product line. When `done`, inventory and recommendations for that
 * commitment type are available.
 */
export type GcpOnboardingStatusByService = {
  /** Current onboarding lifecycle stage for this product line. */
  status: StatusDoiTPerfectScaleForCommitmentsGcpApi;
  /**
   * When PerfectScale for Commitments first began tracking commitments for this commitment type.
   * Bounds lifetime savings totals and onboarding history in the DoiT Console. Omitted or null when
   * onboarding has not started.
   */
  onboardingStartedAt?: Date | null;
  /** Product line this onboarding status belongs to. */
  service: Service1DoiTPerfectScaleForCommitmentsGcpApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcpOnboardingStatusByServiceSchema: Schema<GcpOnboardingStatusByService> =
  s.object<GcpOnboardingStatusByService>(
    {
      status: statusDoiTPerfectScaleForCommitmentsGcpApiSchema,
      onboardingStartedAt: s.optionalNullable(s.dateTime()),
      service: service1DoiTPerfectScaleForCommitmentsGcpApiSchema,
    },
    { additionalProperties: s.json() },
  );
