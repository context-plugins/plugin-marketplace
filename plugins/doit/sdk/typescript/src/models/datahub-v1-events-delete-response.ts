import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1EventsDeleteResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1EventsDeleteResponseSchema: Schema<DatahubV1EventsDeleteResponse> =
  s.object<DatahubV1EventsDeleteResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
