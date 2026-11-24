import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gcsOutputDestination2Schema, type GcsOutputDestination2 } from "./gcs-output-destination2.js";

/** Output configuration for datasets. */
export type DatasetOutputConfig = {
  /** Google Cloud Storage destination to write the output. */
  gcsDestination?: GcsOutputDestination2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetOutputConfigSchema: Schema<DatasetOutputConfig> = s.object<DatasetOutputConfig>(
  {
    gcsDestination: s.optional(s.lazy(() => gcsOutputDestination2Schema)),
  },
  { additionalProperties: s.json() },
);
