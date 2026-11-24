import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1ImportResponse = {
  batch?: string;
  ingestedRows?: number;
  schemaTemplate?: string;
  sourceRecords?: number;
  generatedEvents?: number;
  replacedBatches?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1ImportResponseSchema: Schema<DatahubV1ImportResponse> =
  s.object<DatahubV1ImportResponse>(
    {
      batch: s.optional(s.string()),
      ingestedRows: s.optional(s.int()),
      schemaTemplate: s.optional(s.string()),
      sourceRecords: s.optional(s.int()),
      generatedEvents: s.optional(s.int()),
      replacedBatches: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
