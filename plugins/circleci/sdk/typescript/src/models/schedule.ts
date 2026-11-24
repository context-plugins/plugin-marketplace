import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  actorCircleCiRestApiV2ScheduleApiSchema,
  type ActorCircleCiRestApiV2ScheduleApi,
} from "./actor-circle-ci-rest-api-v2-schedule-api.js";
import { timetableInternalSchema, timetableSchema, type Timetable } from "./timetable.js";

export type Schedule = {
  /** The unique identifier of the schedule */
  id?: string;
  /** The name of the schedule */
  name?: string;
  /** The description of the schedule */
  description?: string;
  timetable?: Timetable;
  /** Pipeline parameters for the schedule */
  parameters?: Record<string, unknown>;
  /** The project slug */
  projectSlug?: string;
  /** The user who created the schedule */
  actor?: ActorCircleCiRestApiV2ScheduleApi;
  /** When the schedule was created */
  createdAt?: Date;
  /** When the schedule was last updated */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scheduleProperties: s.Shape<Schedule> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  timetable: s.optional(s.lazy(() => timetableInternalSchema)),
  parameters: s.optional(s.record(s.string(), s.unknown())),
  projectSlug: s.optional(s.string()),
  actor: s.optional(s.lazy(() => actorCircleCiRestApiV2ScheduleApiSchema)),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    projectSlug: "project_slug",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const scheduleInternalSchema: Schema<Schedule> = s.object<Schedule>(scheduleProperties, {
  additionalProperties: s.json(),
});

export const scheduleSchema: Schema<Schedule> = s.lazySchema(() =>
  s.object<Schedule>(
    {
      ...scheduleProperties,
      timetable: s.optional(s.lazy(() => timetableSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
