import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { employeeInternalSchema, employeeSchema, type Employee } from "./employee.js";

export type Department = {
  id?: number;
  name: string;
  code?: string | null;
  /** @default false */
  isDelete?: boolean;
  companyId?: number;
  createdBy?: number;
  modifiedBy?: number;
  createdOn?: string;
  modifiedOn?: Date;
  company?: Company;
  employees?: Employee[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const departmentProperties: s.Shape<Department> = {
  id: s.optional(s.int()),
  name: s.string(),
  code: s.optionalNullable(s.string()),
  isDelete: s.defaulted(s.boolean(), false),
  companyId: s.optional(s.int()),
  createdBy: s.optional(s.int()),
  modifiedBy: s.optional(s.int()),
  createdOn: s.optional(s.dateOnly()),
  modifiedOn: s.optional(s.dateTime()),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  employees: s.optionalNullable(s.array(s.lazy(() => employeeInternalSchema))),
};

export const departmentInternalSchema: Schema<Department> = s.object<Department>(departmentProperties, {
  additionalProperties: s.json(),
});

export const departmentSchema: Schema<Department> = s.lazySchema(() =>
  s.object<Department>(
    {
      ...departmentProperties,
      name: s.string().check(s.minLength(1)),
      code: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2000))),
      company: s.optional(s.lazy(() => companySchema)),
      employees: s.optionalNullable(s.array(s.lazy(() => employeeSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
