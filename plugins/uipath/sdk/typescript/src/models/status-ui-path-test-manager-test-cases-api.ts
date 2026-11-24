import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Lifecycle status of the test case */
export const StatusUiPathTestManagerTestCasesApi = {
  Draft: "Draft",
  Active: "Active",
  Deprecated: "Deprecated",
} as const;
export type StatusUiPathTestManagerTestCasesApi =
  | (typeof StatusUiPathTestManagerTestCasesApi)[keyof typeof StatusUiPathTestManagerTestCasesApi]
  | (string & {});

export const statusUiPathTestManagerTestCasesApiSchema: EnumSchema<StatusUiPathTestManagerTestCasesApi> =
  s.enumOf<StatusUiPathTestManagerTestCasesApi>(StatusUiPathTestManagerTestCasesApi);
