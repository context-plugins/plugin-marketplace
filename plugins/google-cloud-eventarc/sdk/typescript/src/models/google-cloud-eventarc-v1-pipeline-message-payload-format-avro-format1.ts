import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Avro format. */
export type GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1 = {
  /** Optional. The entire schema definition is stored in this field. */
  schemaDefinition?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1Schema: Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1> =
  s.object<GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1>(
    {
      schemaDefinition: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
