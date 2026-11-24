import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HiringByDepartment = {
  BusinessDevelopment: "Business Development",
  Consulting: "Consulting",
  CustomerService: "Customer Service",
  EngineeringTechnical: "Engineering & Technical",
  Finance: "Finance",
  GeneralManagement: "General Management",
  HealthCareMedical: "Health Care & Medical",
  HumanResources: "Human Resources",
  InformationTechnology: "Information Technology",
  Legal: "Legal",
  Marketing: "Marketing",
  Operations: "Operations",
  Other: "Other",
  Product: "Product",
  ResearchAnalytics: "Research & Analytics",
  Sales: "Sales",
} as const;
export type HiringByDepartment = (typeof HiringByDepartment)[keyof typeof HiringByDepartment] | (string & {});

export const hiringByDepartmentSchema: EnumSchema<HiringByDepartment> =
  s.enumOf<HiringByDepartment>(HiringByDepartment);
