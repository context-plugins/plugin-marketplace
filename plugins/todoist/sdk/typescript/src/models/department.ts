import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Department = {
  Administration: "administration",
  CustomerService: "customer_service",
  FinanceAccounting: "finance_accounting",
  HumanResources: "human_resources",
  InformationTechnology: "information_technology",
  Legal: "legal",
  Marketing: "marketing",
  Operations: "operations",
  ProductDevelopment: "product_development",
  ResearchDevelopment: "research_development",
  Sales: "sales",
  SupplyChainManagement: "supply_chain_management",
  Engineering: "engineering",
  QualityAssurance: "quality_assurance",
  ExecutiveManagement: "executive_management",
  Other: "other",
} as const;
export type Department = (typeof Department)[keyof typeof Department] | (string & {});

export const departmentSchema: EnumSchema<Department> = s.enumOf<Department>(Department);
