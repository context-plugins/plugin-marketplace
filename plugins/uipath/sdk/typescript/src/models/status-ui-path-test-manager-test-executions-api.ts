import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Aggregate execution status */
export const StatusUiPathTestManagerTestExecutionsApi = {
  Pending: "Pending",
  Running: "Running",
  Passed: "Passed",
  Failed: "Failed",
  Blocked: "Blocked",
  Cancelled: "Cancelled",
} as const;
export type StatusUiPathTestManagerTestExecutionsApi =
  | (typeof StatusUiPathTestManagerTestExecutionsApi)[keyof typeof StatusUiPathTestManagerTestExecutionsApi]
  | (string & {});

export const statusUiPathTestManagerTestExecutionsApiSchema: EnumSchema<StatusUiPathTestManagerTestExecutionsApi> =
  s.enumOf<StatusUiPathTestManagerTestExecutionsApi>(StatusUiPathTestManagerTestExecutionsApi);
