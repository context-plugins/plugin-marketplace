import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1EventsResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1EventsResponseSchema: Schema<DatahubV1EventsResponse> =
  s.object<DatahubV1EventsResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
