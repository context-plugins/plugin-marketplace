import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The user's job function. */
export const JobTitle = {
  DataEngineerDataAnalysts: "Data Engineer / Data Analysts",
  ExecutiveTeam: "Executive Team",
  FinanceAccounting: "Finance / Accounting",
  Founder: "Founder",
  LegalPurchasing: "Legal / Purchasing",
  Management: "Management",
  SalesMarketing: "Sales / Marketing",
  SoftwareOpsEngineer: "Software / Ops Engineer",
} as const;
export type JobTitle = (typeof JobTitle)[keyof typeof JobTitle] | (string & {});

export const jobTitleSchema: EnumSchema<JobTitle> = s.enumOf<JobTitle>(JobTitle);
