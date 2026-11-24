import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { findAllRun3Schema, type FindAllRun3 } from "./find-all-run3.js";

/** Event containing status update for FindAll run. */
export type FindAllRunStatusEvent = {
  /** Event type; always 'findall.status'. @default "findall.status" */
  type?: "findall.status";
  /** Timestamp of the event. */
  timestamp: Date;
  /** Unique event identifier for the event. */
  eventId: string;
  /** Updated FindAll run information. */
  data: FindAllRun3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllRunStatusEventSchema: Schema<FindAllRunStatusEvent> = s.object<FindAllRunStatusEvent>(
  {
    type: s.defaulted(s.literal("findall.status"), "findall.status"),
    timestamp: s.dateTime(),
    eventId: s.string(),
    data: findAllRun3Schema,
    _keysMap: {
      eventId: "event_id",
    },
  },
  { additionalProperties: s.json() },
);
