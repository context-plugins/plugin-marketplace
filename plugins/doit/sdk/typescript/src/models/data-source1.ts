import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Omission preserves the saved data source. Tokenomics requires customer enablement. */
export const DataSource1 = {
  Billing: "billing",
  BillingDatahub: "billing-datahub",
  KubernetesUtilization: "kubernetes-utilization",
  Tokenomics: "tokenomics",
} as const;
export type DataSource1 = (typeof DataSource1)[keyof typeof DataSource1] | (string & {});

export const dataSource1Schema: EnumSchema<DataSource1> = s.enumOf<DataSource1>(DataSource1);
