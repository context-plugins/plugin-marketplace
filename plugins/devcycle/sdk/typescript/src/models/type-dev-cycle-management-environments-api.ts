import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The environment type */
export const TypeDevCycleManagementEnvironmentsApi = {
  Development: "development",
  Staging: "staging",
  Production: "production",
  DisasterRecovery: "disaster_recovery",
} as const;
export type TypeDevCycleManagementEnvironmentsApi =
  | (typeof TypeDevCycleManagementEnvironmentsApi)[keyof typeof TypeDevCycleManagementEnvironmentsApi]
  | (string & {});

export const typeDevCycleManagementEnvironmentsApiSchema: EnumSchema<TypeDevCycleManagementEnvironmentsApi> =
  s.enumOf<TypeDevCycleManagementEnvironmentsApi>(TypeDevCycleManagementEnvironmentsApi);
