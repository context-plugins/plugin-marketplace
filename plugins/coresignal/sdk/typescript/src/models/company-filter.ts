import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyFilter = {
  name?: string;
  industry?: string;
  size?: string;
  country?: string;
  region?: string;
  foundedFrom?: number;
  foundedTo?: number;
  employeesCountFrom?: number;
  employeesCountTo?: number;
  technologies?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyFilterSchema: Schema<CompanyFilter> = s.object<CompanyFilter>(
  {
    name: s.optional(s.string()),
    industry: s.optional(s.string()),
    size: s.optional(s.string()),
    country: s.optional(s.string()),
    region: s.optional(s.string()),
    foundedFrom: s.optional(s.int()),
    foundedTo: s.optional(s.int()),
    employeesCountFrom: s.optional(s.int()),
    employeesCountTo: s.optional(s.int()),
    technologies: s.optional(s.array(s.string())),
    _keysMap: {
      foundedFrom: "founded_from",
      foundedTo: "founded_to",
      employeesCountFrom: "employees_count_from",
      employeesCountTo: "employees_count_to",
    },
  },
  { additionalProperties: s.json() },
);
