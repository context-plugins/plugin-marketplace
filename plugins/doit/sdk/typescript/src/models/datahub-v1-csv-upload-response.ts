import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1CsvUploadResponse = {
  /** batch id, generated during ingestion */
  batch?: string;
  /** the number of events that have been accepted for processing */
  ingestedRows?: number;
  /** the schema template the file was validated against */
  schemaTemplate?: string;
  /** the number of source rows in the file */
  sourceRecords?: number;
  /** the number of DataHub events generated from the source rows */
  generatedEvents?: number;
  /** ids of the batches soft-deleted because `replace` was set; omitted when none */
  replacedBatches?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1CsvUploadResponseSchema: Schema<DatahubV1CsvUploadResponse> =
  s.object<DatahubV1CsvUploadResponse>(
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
