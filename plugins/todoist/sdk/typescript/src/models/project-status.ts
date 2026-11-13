import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Project status.
 *
 * At the moment, this is for workspace projects only.
 */
export const ProjectStatus = {
  Planned: "PLANNED",
  InProgress: "IN_PROGRESS",
  Paused: "PAUSED",
  Completed: "COMPLETED",
  Canceled: "CANCELED",
} as const;
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus] | (string & {});

export const projectStatusSchema: EnumSchema<ProjectStatus> = s.enumOf<ProjectStatus>(ProjectStatus);
