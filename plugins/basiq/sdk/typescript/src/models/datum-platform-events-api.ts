import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entitySchema, type Entity } from "./entity.js";
import { eventTypeSchema, type EventType } from "./event-type.js";

export type DatumPlatformEventsApi = {
  /** Type, always "event". */
  type: string;
  /** Event identification. */
  id: string;
  /** Date the event was created. */
  createdDate: string;
  /** The entity associated with the event that has occurred */
  entity: Entity;
  /** The type of event that has occurred */
  eventType: EventType;
  /** The identifier of the user the event belongs to. */
  userId: string;
  /** URL to the data source the event occurred. */
  dataRef: string;
  /** The data associated with the event that has been created. */
  data: string;
  links: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumPlatformEventsApiSchema: Schema<DatumPlatformEventsApi> = s.object<DatumPlatformEventsApi>(
  {
    type: s.string(),
    id: s.string(),
    createdDate: s.string(),
    entity: entitySchema,
    eventType: eventTypeSchema,
    userId: s.string(),
    dataRef: s.string(),
    data: s.string(),
    links: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
