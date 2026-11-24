import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { employeeInternalSchema, employeeSchema, type Employee } from "./employee.js";

export type CompaniesApiEmployeesResponse = {
  value?: Employee[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiEmployeesResponseProperties: s.Shape<CompaniesApiEmployeesResponse> = {
  value: s.optional(s.array(s.lazy(() => employeeInternalSchema))),
};

export const companiesApiEmployeesResponseInternalSchema: Schema<CompaniesApiEmployeesResponse> =
  s.object<CompaniesApiEmployeesResponse>(companiesApiEmployeesResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiEmployeesResponseSchema: Schema<CompaniesApiEmployeesResponse> = s.lazySchema(() =>
  s.object<CompaniesApiEmployeesResponse>(
    {
      ...companiesApiEmployeesResponseProperties,
      value: s.optional(s.array(s.lazy(() => employeeSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
