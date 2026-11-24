import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The format of a Protobuf message payload. */
export type GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat = {
  /** Optional. The entire schema definition is stored in this field. */
  schemaDefinition?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormatSchema: Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat> =
  s.object<GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat>(
    {
      schemaDefinition: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
