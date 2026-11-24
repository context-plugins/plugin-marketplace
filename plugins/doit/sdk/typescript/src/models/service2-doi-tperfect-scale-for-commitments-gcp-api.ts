import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product line these savings totals belong to. */
export const Service2DoiTPerfectScaleForCommitmentsGcpApi = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type Service2DoiTPerfectScaleForCommitmentsGcpApi =
  | (typeof Service2DoiTPerfectScaleForCommitmentsGcpApi)[keyof typeof Service2DoiTPerfectScaleForCommitmentsGcpApi]
  | (string & {});

export const service2DoiTPerfectScaleForCommitmentsGcpApiSchema: EnumSchema<Service2DoiTPerfectScaleForCommitmentsGcpApi> =
  s.enumOf<Service2DoiTPerfectScaleForCommitmentsGcpApi>(Service2DoiTPerfectScaleForCommitmentsGcpApi);
