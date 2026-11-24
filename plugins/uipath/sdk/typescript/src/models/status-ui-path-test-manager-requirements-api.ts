import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Lifecycle status of the requirement */
export const StatusUiPathTestManagerRequirementsApi = {
  Active: "Active",
  Deprecated: "Deprecated",
} as const;
export type StatusUiPathTestManagerRequirementsApi =
  | (typeof StatusUiPathTestManagerRequirementsApi)[keyof typeof StatusUiPathTestManagerRequirementsApi]
  | (string & {});

export const statusUiPathTestManagerRequirementsApiSchema: EnumSchema<StatusUiPathTestManagerRequirementsApi> =
  s.enumOf<StatusUiPathTestManagerRequirementsApi>(StatusUiPathTestManagerRequirementsApi);
