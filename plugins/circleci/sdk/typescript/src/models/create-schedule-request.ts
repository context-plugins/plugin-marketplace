import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributionActorSchema, type AttributionActor } from "./attribution-actor.js";
import { timetableInternalSchema, timetableSchema, type Timetable } from "./timetable.js";

export type CreateScheduleRequest = {
  /** The name of the schedule */
  name: string;
  /** The description of the schedule */
  description?: string;
  timetable: Timetable;
  /** Who to attribute pipeline triggers to */
  attributionActor: AttributionActor;
  /** Pipeline parameters for the schedule */
  parameters: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createScheduleRequestProperties: s.Shape<CreateScheduleRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  timetable: timetableInternalSchema,
  attributionActor: attributionActorSchema,
  parameters: s.record(s.string(), s.unknown()),
  _keysMap: {
    attributionActor: "attribution-actor",
  },
};

export const createScheduleRequestInternalSchema: Schema<CreateScheduleRequest> =
  s.object<CreateScheduleRequest>(createScheduleRequestProperties, { additionalProperties: s.json() });

export const createScheduleRequestSchema: Schema<CreateScheduleRequest> = s.lazySchema(() =>
  s.object<CreateScheduleRequest>(
    {
      ...createScheduleRequestProperties,
      timetable: timetableSchema,
    },
    { additionalProperties: s.json() },
  ),
);
