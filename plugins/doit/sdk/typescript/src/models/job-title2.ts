import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The job function of the user being invited. */
export const JobTitle2 = {
  DataEngineerDataAnalysts: "Data Engineer / Data Analysts",
  ExecutiveTeam: "Executive Team",
  FinanceAccounting: "Finance / Accounting",
  Founder: "Founder",
  LegalPurchasing: "Legal / Purchasing",
  Management: "Management",
  SalesMarketing: "Sales / Marketing",
  SoftwareOpsEngineer: "Software / Ops Engineer",
} as const;
export type JobTitle2 = (typeof JobTitle2)[keyof typeof JobTitle2] | (string & {});

export const jobTitle2Schema: EnumSchema<JobTitle2> = s.enumOf<JobTitle2>(JobTitle2);
