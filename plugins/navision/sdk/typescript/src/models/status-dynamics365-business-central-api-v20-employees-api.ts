import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDynamics365BusinessCentralApiV20EmployeesApi = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
export type StatusDynamics365BusinessCentralApiV20EmployeesApi =
  | (typeof StatusDynamics365BusinessCentralApiV20EmployeesApi)[keyof typeof StatusDynamics365BusinessCentralApiV20EmployeesApi]
  | (string & {});

export const statusDynamics365BusinessCentralApiV20EmployeesApiSchema: EnumSchema<StatusDynamics365BusinessCentralApiV20EmployeesApi> =
  s.enumOf<StatusDynamics365BusinessCentralApiV20EmployeesApi>(
    StatusDynamics365BusinessCentralApiV20EmployeesApi,
  );
