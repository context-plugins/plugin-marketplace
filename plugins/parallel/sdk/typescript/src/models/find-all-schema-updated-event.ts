import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { findAllSchema1Schema, type FindAllSchema1 } from "./find-all-schema1.js";

/** Event containing full snapshot of FindAll run state. */
export type FindAllSchemaUpdatedEvent = {
  /** Event type; always 'findall.schema.updated'. @default "findall.schema.updated" */
  type?: "findall.schema.updated";
  /** Timestamp of the event. */
  timestamp: Date;
  /** Unique event identifier for the event. */
  eventId: string;
  /** Updated FindAll schema. */
  data: FindAllSchema1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllSchemaUpdatedEventSchema: Schema<FindAllSchemaUpdatedEvent> =
  s.object<FindAllSchemaUpdatedEvent>(
    {
      type: s.defaulted(s.literal("findall.schema.updated"), "findall.schema.updated"),
      timestamp: s.dateTime(),
      eventId: s.string(),
      data: findAllSchema1Schema,
      _keysMap: {
        eventId: "event_id",
      },
    },
    { additionalProperties: s.json() },
  );
