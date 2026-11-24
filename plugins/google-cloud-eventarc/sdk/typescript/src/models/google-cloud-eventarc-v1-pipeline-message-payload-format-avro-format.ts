import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The format of an AVRO message payload. */
export type GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat = {
  /** Optional. The entire schema definition is stored in this field. */
  schemaDefinition?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineMessagePayloadFormatAvroFormatSchema: Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat> =
  s.object<GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat>(
    {
      schemaDefinition: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
