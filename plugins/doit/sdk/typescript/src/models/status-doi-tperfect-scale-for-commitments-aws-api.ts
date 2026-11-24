import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Projection lifecycle state. `expired` means the planning cycle has lapsed and a new projection
 * should be triggered by the automated scheduler. When the stored document has no `status`, the
 * server returns `valid`.
 */
export const StatusDoiTPerfectScaleForCommitmentsAwsApi = {
  Valid: "valid",
  Expired: "expired",
} as const;
export type StatusDoiTPerfectScaleForCommitmentsAwsApi =
  | (typeof StatusDoiTPerfectScaleForCommitmentsAwsApi)[keyof typeof StatusDoiTPerfectScaleForCommitmentsAwsApi]
  | (string & {});

export const statusDoiTPerfectScaleForCommitmentsAwsApiSchema: EnumSchema<StatusDoiTPerfectScaleForCommitmentsAwsApi> =
  s.enumOf<StatusDoiTPerfectScaleForCommitmentsAwsApi>(StatusDoiTPerfectScaleForCommitmentsAwsApi);
