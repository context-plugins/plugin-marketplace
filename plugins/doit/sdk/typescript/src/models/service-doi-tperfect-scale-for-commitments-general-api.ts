import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Product line the policy applies to. `compute` and `database` are AWS Savings Plan lines (GCP also
 * has `compute`); `cloud_sql` is GCP only.
 */
export const ServiceDoiTPerfectScaleForCommitmentsGeneralApi = {
  Compute: "compute",
  Database: "database",
  CloudSql: "cloud_sql",
} as const;
export type ServiceDoiTPerfectScaleForCommitmentsGeneralApi =
  | (typeof ServiceDoiTPerfectScaleForCommitmentsGeneralApi)[keyof typeof ServiceDoiTPerfectScaleForCommitmentsGeneralApi]
  | (string & {});

export const serviceDoiTPerfectScaleForCommitmentsGeneralApiSchema: EnumSchema<ServiceDoiTPerfectScaleForCommitmentsGeneralApi> =
  s.enumOf<ServiceDoiTPerfectScaleForCommitmentsGeneralApi>(ServiceDoiTPerfectScaleForCommitmentsGeneralApi);
