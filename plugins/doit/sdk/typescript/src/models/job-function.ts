import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Deprecated: use 'jobTitle' instead. If both are provided, 'jobTitle' takes precedence. */
export const JobFunction = {
  DataEngineerDataAnalysts: "Data Engineer / Data Analysts",
  ExecutiveTeam: "Executive Team",
  FinanceAccounting: "Finance / Accounting",
  Founder: "Founder",
  LegalPurchasing: "Legal / Purchasing",
  Management: "Management",
  SalesMarketing: "Sales / Marketing",
  SoftwareOpsEngineer: "Software / Ops Engineer",
} as const;
export type JobFunction = (typeof JobFunction)[keyof typeof JobFunction] | (string & {});

export const jobFunctionSchema: EnumSchema<JobFunction> = s.enumOf<JobFunction>(JobFunction);
