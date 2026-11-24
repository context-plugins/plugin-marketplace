import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1DatasetsResponse2 = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1DatasetsResponse2Schema: Schema<DatahubV1DatasetsResponse2> =
  s.object<DatahubV1DatasetsResponse2>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
