import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The user who created the schedule */
export type ActorCircleCiRestApiV2ScheduleApi = {
  /** The actor ID */
  id?: string;
  /** The actor login */
  login?: string;
  /** The actor name */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actorCircleCiRestApiV2ScheduleApiSchema: Schema<ActorCircleCiRestApiV2ScheduleApi> =
  s.object<ActorCircleCiRestApiV2ScheduleApi>(
    {
      id: s.optional(s.string()),
      login: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
