import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Exactly one of "eventIds" or "time ranges" must be provided. */
export type DatahubV1EventsDeleteRequest = {
  /** The dataset (provider) of the events to be deleted. */
  dataset: string;
  eventIds?: string[];
  /** The start timestamp of the time range in RFC3339 format. */
  startTime?: Date;
  /** The end timestamp of the time range in RFC3339 format. */
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1EventsDeleteRequestSchema: Schema<DatahubV1EventsDeleteRequest> =
  s.object<DatahubV1EventsDeleteRequest>(
    {
      dataset: s.string(),
      eventIds: s.optional(s.array(s.string())),
      startTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
