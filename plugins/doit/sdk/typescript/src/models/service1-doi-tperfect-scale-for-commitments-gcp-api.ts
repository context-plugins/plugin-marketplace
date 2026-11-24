import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product line this onboarding status belongs to. */
export const Service1DoiTPerfectScaleForCommitmentsGcpApi = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type Service1DoiTPerfectScaleForCommitmentsGcpApi =
  | (typeof Service1DoiTPerfectScaleForCommitmentsGcpApi)[keyof typeof Service1DoiTPerfectScaleForCommitmentsGcpApi]
  | (string & {});

export const service1DoiTPerfectScaleForCommitmentsGcpApiSchema: EnumSchema<Service1DoiTPerfectScaleForCommitmentsGcpApi> =
  s.enumOf<Service1DoiTPerfectScaleForCommitmentsGcpApi>(Service1DoiTPerfectScaleForCommitmentsGcpApi);
