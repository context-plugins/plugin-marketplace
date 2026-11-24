import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jsonFileFormatSchema, type JsonFileFormat } from "./json-file-format.js";

/** A configuration for how data should be loaded to Cloud Storage. */
export type GcsDestinationConfig2 = {
  /** Path inside the Cloud Storage bucket to write data to. */
  path?: string;
  /**
   * The maximum duration for which new events are added before a file is closed and a new file is
   * created. Values within the range of 15-60 seconds are allowed.
   */
  fileRotationInterval?: string;
  /** AVRO file format configuration. */
  avroFileFormat?: Record<string, unknown>;
  /** JSON file format configuration. */
  jsonFileFormat?: JsonFileFormat;
  /** The maximum file size to be saved in the bucket. */
  fileRotationMb?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsDestinationConfig2Schema: Schema<GcsDestinationConfig2> = s.object<GcsDestinationConfig2>(
  {
    path: s.optional(s.string()),
    fileRotationInterval: s.optional(s.string()),
    avroFileFormat: s.optional(s.record(s.string(), s.unknown())),
    jsonFileFormat: s.optional(s.lazy(() => jsonFileFormatSchema)),
    fileRotationMb: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
