import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { includeSchema, type Include } from "./include.js";
import { scheduleDatesSchema, type ScheduleDates } from "./schedule-dates.js";

export type ProjectDuplicateRequest = {
  /** The name of the new project. */
  name: string;
  /**
   * Sets the team of the new project. If team is not defined, the new project will be in the same
   * team as the the original project.
   */
  team?: string;
  /** The elements that will be duplicated to the new project. Tasks are always included. */
  include?: Include;
  /**
   * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option.
   * Requires either `start_on` or `due_on`, but not both.
   */
  scheduleDates?: ScheduleDates;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectDuplicateRequestSchema: Schema<ProjectDuplicateRequest> =
  s.object<ProjectDuplicateRequest>(
    {
      name: s.string(),
      team: s.optional(s.string()),
      include: s.optional(s.lazy(() => includeSchema)),
      scheduleDates: s.optional(s.lazy(() => scheduleDatesSchema)),
      _keysMap: {
        scheduleDates: "schedule_dates",
      },
    },
    { additionalProperties: s.json() },
  );
