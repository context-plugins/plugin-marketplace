import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributionActorSchema, type AttributionActor } from "./attribution-actor.js";
import { timetableInternalSchema, timetableSchema, type Timetable } from "./timetable.js";

export type UpdateScheduleRequest = {
  /** The name of the schedule */
  name?: string;
  /** The description of the schedule */
  description?: string;
  timetable?: Timetable;
  /** Who to attribute pipeline triggers to */
  attributionActor?: AttributionActor;
  /** Pipeline parameters for the schedule */
  parameters?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateScheduleRequestProperties: s.Shape<UpdateScheduleRequest> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  timetable: s.optional(s.lazy(() => timetableInternalSchema)),
  attributionActor: s.optional(s.lazy(() => attributionActorSchema)),
  parameters: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    attributionActor: "attribution-actor",
  },
};

export const updateScheduleRequestInternalSchema: Schema<UpdateScheduleRequest> =
  s.object<UpdateScheduleRequest>(updateScheduleRequestProperties, { additionalProperties: s.json() });

export const updateScheduleRequestSchema: Schema<UpdateScheduleRequest> = s.lazySchema(() =>
  s.object<UpdateScheduleRequest>(
    {
      ...updateScheduleRequestProperties,
      timetable: s.optional(s.lazy(() => timetableSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
