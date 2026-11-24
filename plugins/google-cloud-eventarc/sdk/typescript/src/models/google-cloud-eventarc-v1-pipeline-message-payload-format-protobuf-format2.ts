import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Protobuf format. */
export type GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2 = {
  /** Optional. The entire schema definition is stored in this field. */
  schemaDefinition?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2Schema: Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2> =
  s.object<GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2>(
    {
      schemaDefinition: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
