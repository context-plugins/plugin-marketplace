import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data source of the report. */
export const DataSourceDoiTReportsApi = {
  Billing: "billing",
  Bqlens: "bqlens",
  BillingDatahub: "billing-datahub",
  KubernetesUtilization: "kubernetes-utilization",
} as const;
export type DataSourceDoiTReportsApi =
  | (typeof DataSourceDoiTReportsApi)[keyof typeof DataSourceDoiTReportsApi]
  | (string & {});

export const dataSourceDoiTReportsApiSchema: EnumSchema<DataSourceDoiTReportsApi> =
  s.enumOf<DataSourceDoiTReportsApi>(DataSourceDoiTReportsApi);
