import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1Schema,
  type GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1,
} from "./google-cloud-eventarc-v1-pipeline-message-payload-format-avro-format1.js";
import {
  googleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2Schema,
  type GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2,
} from "./google-cloud-eventarc-v1-pipeline-message-payload-format-protobuf-format2.js";

/**
 * Optional. The message format before it is delivered to the destination. If not set, the message
 * will be delivered in the format it was originally delivered to the Pipeline. This field can only
 * be set if Pipeline.input_payload_format is also set.
 */
export type GoogleCloudEventarcV1PipelineMessagePayloadFormat3 = {
  /** Optional. Protobuf format. */
  protobuf?: GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2;
  /** Optional. Avro format. */
  avro?: GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1;
  /** Optional. JSON format. */
  json?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineMessagePayloadFormat3Schema: Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormat3> =
  s.object<GoogleCloudEventarcV1PipelineMessagePayloadFormat3>(
    {
      protobuf: s.optional(
        s.lazy(() => googleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2Schema),
      ),
      avro: s.optional(s.lazy(() => googleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1Schema)),
      json: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
