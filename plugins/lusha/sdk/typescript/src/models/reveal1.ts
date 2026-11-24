import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reveal1 = {
  EmployeesByDepartment: "employeesByDepartment",
  EmployeesByLocation: "employeesByLocation",
  EmployeesBySeniority: "employeesBySeniority",
  Competitors: "competitors",
  Intent: "intent",
  EstimatedAnnualItSpend: "estimatedAnnualItSpend",
  MonthlyWebsiteTraffic: "monthlyWebsiteTraffic",
} as const;
export type Reveal1 = (typeof Reveal1)[keyof typeof Reveal1] | (string & {});

export const reveal1Schema: EnumSchema<Reveal1> = s.enumOf<Reveal1>(Reveal1);
