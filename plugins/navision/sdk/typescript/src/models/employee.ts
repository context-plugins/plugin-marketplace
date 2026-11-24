import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusDynamics365BusinessCentralApiV20EmployeesApiSchema,
  type StatusDynamics365BusinessCentralApiV20EmployeesApi,
} from "./status-dynamics365-business-central-api-v20-employees-api.js";

export type Employee = {
  id?: string;
  number?: string;
  displayName?: string;
  givenName?: string;
  middleName?: string;
  surname?: string;
  jobTitle?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;
  mobilePhone?: string;
  email?: string;
  personalEmail?: string;
  employmentDate?: string;
  terminationDate?: string;
  status?: StatusDynamics365BusinessCentralApiV20EmployeesApi;
  birthDate?: string;
  statisticsGroupCode?: string;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const employeeProperties: s.Shape<Employee> = {
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  displayName: s.optional(s.string()),
  givenName: s.optional(s.string()),
  middleName: s.optional(s.string()),
  surname: s.optional(s.string()),
  jobTitle: s.optional(s.string()),
  addressLine1: s.optional(s.string()),
  addressLine2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  mobilePhone: s.optional(s.string()),
  email: s.optional(s.string()),
  personalEmail: s.optional(s.string()),
  employmentDate: s.optional(s.dateOnly()),
  terminationDate: s.optional(s.dateOnly()),
  status: s.optional(s.lazy(() => statusDynamics365BusinessCentralApiV20EmployeesApiSchema)),
  birthDate: s.optional(s.dateOnly()),
  statisticsGroupCode: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const employeeInternalSchema: Schema<Employee> = s.object<Employee>(employeeProperties, {
  additionalProperties: s.json(),
});

export const employeeSchema: Schema<Employee> = s.lazySchema(() =>
  s.object<Employee>(
    {
      ...employeeProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
      givenName: s.optional(s.string().check(s.maxLength(30))),
      middleName: s.optional(s.string().check(s.maxLength(30))),
      surname: s.optional(s.string().check(s.maxLength(30))),
      jobTitle: s.optional(s.string().check(s.maxLength(30))),
      addressLine1: s.optional(s.string().check(s.maxLength(100))),
      addressLine2: s.optional(s.string().check(s.maxLength(50))),
      city: s.optional(s.string().check(s.maxLength(30))),
      state: s.optional(s.string().check(s.maxLength(20))),
      country: s.optional(s.string().check(s.maxLength(10))),
      postalCode: s.optional(s.string().check(s.maxLength(20))),
      phoneNumber: s.optional(s.string().check(s.maxLength(30))),
      mobilePhone: s.optional(s.string().check(s.maxLength(30))),
      email: s.optional(s.string().check(s.maxLength(80))),
      personalEmail: s.optional(s.string().check(s.maxLength(80))),
      statisticsGroupCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
