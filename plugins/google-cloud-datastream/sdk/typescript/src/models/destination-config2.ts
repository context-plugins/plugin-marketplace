import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bigQueryDestinationConfig2Schema,
  type BigQueryDestinationConfig2,
} from "./big-query-destination-config2.js";
import { gcsDestinationConfig2Schema, type GcsDestinationConfig2 } from "./gcs-destination-config2.js";

/** Required. Destination connection profile configuration. */
export type DestinationConfig2 = {
  /** A configuration for how data should be loaded to Cloud Storage. */
  gcsDestinationConfig?: GcsDestinationConfig2;
  /** BigQuery destination configuration. */
  bigqueryDestinationConfig?: BigQueryDestinationConfig2;
  /**
   * Required. Destination connection profile resource. Format:
   * `projects/{project}/locations/{location}/connectionProfiles/{name}`
   */
  destinationConnectionProfile?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destinationConfig2Schema: Schema<DestinationConfig2> = s.object<DestinationConfig2>(
  {
    gcsDestinationConfig: s.optional(s.lazy(() => gcsDestinationConfig2Schema)),
    bigqueryDestinationConfig: s.optional(s.lazy(() => bigQueryDestinationConfig2Schema)),
    destinationConnectionProfile: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
