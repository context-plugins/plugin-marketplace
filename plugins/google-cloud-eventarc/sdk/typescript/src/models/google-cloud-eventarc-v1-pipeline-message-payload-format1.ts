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
 * Optional. The payload format expected for the messages received by the Pipeline. If
 * input_payload_format is set then any messages not matching this format will be treated as
 * persistent errors. If input_payload_format is not set, then the message data will be treated as
 * an opaque binary and no output format can be set on the Pipeline through the
 * Pipeline.Destination.output_payload_format field. Any Mediations on the Pipeline that involve
 * access to the data field will fail as persistent errors.
 */
export type GoogleCloudEventarcV1PipelineMessagePayloadFormat1 = {
  /** Optional. Protobuf format. */
  protobuf?: GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2;
  /** Optional. Avro format. */
  avro?: GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1;
  /** Optional. JSON format. */
  json?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineMessagePayloadFormat1Schema: Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormat1> =
  s.object<GoogleCloudEventarcV1PipelineMessagePayloadFormat1>(
    {
      protobuf: s.optional(
        s.lazy(() => googleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2Schema),
      ),
      avro: s.optional(s.lazy(() => googleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1Schema)),
      json: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
