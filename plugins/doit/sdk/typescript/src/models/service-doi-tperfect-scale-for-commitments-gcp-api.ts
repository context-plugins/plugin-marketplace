import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product line these metrics belong to. */
export const ServiceDoiTPerfectScaleForCommitmentsGcpApi = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type ServiceDoiTPerfectScaleForCommitmentsGcpApi =
  | (typeof ServiceDoiTPerfectScaleForCommitmentsGcpApi)[keyof typeof ServiceDoiTPerfectScaleForCommitmentsGcpApi]
  | (string & {});

export const serviceDoiTPerfectScaleForCommitmentsGcpApiSchema: EnumSchema<ServiceDoiTPerfectScaleForCommitmentsGcpApi> =
  s.enumOf<ServiceDoiTPerfectScaleForCommitmentsGcpApi>(ServiceDoiTPerfectScaleForCommitmentsGcpApi);
