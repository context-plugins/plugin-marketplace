import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Data source used to query data for the alert. Affects which dimensions and metrics are available.
 */
export const DataSource = {
  Billing: "billing",
  BillingDatahub: "billing-datahub",
  KubernetesUtilization: "kubernetes-utilization",
  Tokenomics: "tokenomics",
} as const;
export type DataSource = (typeof DataSource)[keyof typeof DataSource] | (string & {});

export const dataSourceSchema: EnumSchema<DataSource> = s.enumOf<DataSource>(DataSource);
