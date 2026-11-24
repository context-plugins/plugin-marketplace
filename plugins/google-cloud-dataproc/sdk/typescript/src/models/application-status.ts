import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApplicationStatus = {
  ApplicationStatusUnspecified: "APPLICATION_STATUS_UNSPECIFIED",
  ApplicationStatusRunning: "APPLICATION_STATUS_RUNNING",
  ApplicationStatusCompleted: "APPLICATION_STATUS_COMPLETED",
} as const;
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus] | (string & {});

export const applicationStatusSchema: EnumSchema<ApplicationStatus> =
  s.enumOf<ApplicationStatus>(ApplicationStatus);
