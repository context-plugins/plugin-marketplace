import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudEventarcV1PipelineDestinationSchema,
  type GoogleCloudEventarcV1PipelineDestination,
} from "./google-cloud-eventarc-v1-pipeline-destination.js";
import {
  googleCloudEventarcV1PipelineMediationSchema,
  type GoogleCloudEventarcV1PipelineMediation,
} from "./google-cloud-eventarc-v1-pipeline-mediation.js";
import {
  googleCloudEventarcV1PipelineMessagePayloadFormat1Schema,
  type GoogleCloudEventarcV1PipelineMessagePayloadFormat1,
} from "./google-cloud-eventarc-v1-pipeline-message-payload-format1.js";
import {
  googleCloudEventarcV1PipelineRetryPolicy2Schema,
  type GoogleCloudEventarcV1PipelineRetryPolicy2,
} from "./google-cloud-eventarc-v1-pipeline-retry-policy2.js";
import { loggingConfig1Schema, type LoggingConfig1 } from "./logging-config1.js";

/** A representation of the Pipeline resource. */
export type Pipeline = {
  /**
   * Required. List of destinations to which messages will be forwarded. Currently, exactly one
   * destination is supported per Pipeline.
   */
  destinations?: GoogleCloudEventarcV1PipelineDestination[];
  /** Optional. User-defined annotations. See https://google.aip.dev/128#annotations. */
  annotations?: Record<string, string>;
  /**
   * Output only. Server-assigned unique identifier for the Pipeline. The value is a UUID4 string
   * and guaranteed to remain unchanged until the resource is deleted.
   */
  uid?: string;
  /**
   * Optional. List of mediation operations to be performed on the message. Currently, only one
   * Transformation operation is allowed in each Pipeline.
   */
  mediations?: GoogleCloudEventarcV1PipelineMediation[];
  /** Optional. Display name of resource. */
  displayName?: string;
  /**
   * Output only. The last-modified time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
   * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
   * "2014-10-02T15:01:23.045123456Z".
   */
  updateTime?: string;
  /**
   * Optional. The payload format expected for the messages received by the Pipeline. If
   * input_payload_format is set then any messages not matching this format will be treated as
   * persistent errors. If input_payload_format is not set, then the message data will be treated as
   * an opaque binary and no output format can be set on the Pipeline through the
   * Pipeline.Destination.output_payload_format field. Any Mediations on the Pipeline that involve
   * access to the data field will fail as persistent errors.
   */
  inputPayloadFormat?: GoogleCloudEventarcV1PipelineMessagePayloadFormat1;
  /**
   * Identifier. The resource name of the Pipeline. Must be unique within the location of the
   * project and must be in `projects/{project}/locations/{location}/pipelines/{pipeline}` format.
   */
  name?: string;
  /**
   * Output only. This checksum is computed by the server based on the value of other fields, and
   * might be sent only on create requests to ensure that the client has an up-to-date value before
   * proceeding.
   */
  etag?: string;
  /**
   * Optional. User labels attached to the Pipeline that can be used to group resources. An object
   * containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count":
   * "3" }.
   */
  labels?: Record<string, string>;
  /**
   * Output only. Whether or not this Pipeline satisfies the requirements of physical zone
   * separation
   */
  satisfiesPzs?: boolean;
  /**
   * Output only. The creation time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
   * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
   * "2014-10-02T15:01:23.045123456Z".
   */
  createTime?: string;
  /** Optional. Config to control Platform Logging for Pipelines. */
  loggingConfig?: LoggingConfig1;
  /** Optional. The retry policy to use in the pipeline. */
  retryPolicy?: GoogleCloudEventarcV1PipelineRetryPolicy2;
  /**
   * Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the
   * event data. If not set, an internal Google-owned key will be used to encrypt messages. It must
   * match the pattern
   * "projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".
   */
  cryptoKeyName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineSchema: Schema<Pipeline> = s.object<Pipeline>(
  {
    destinations: s.optional(s.array(s.lazy(() => googleCloudEventarcV1PipelineDestinationSchema))),
    annotations: s.optional(s.record(s.string(), s.string())),
    uid: s.optional(s.string()),
    mediations: s.optional(s.array(s.lazy(() => googleCloudEventarcV1PipelineMediationSchema))),
    displayName: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    inputPayloadFormat: s.optional(s.lazy(() => googleCloudEventarcV1PipelineMessagePayloadFormat1Schema)),
    name: s.optional(s.string()),
    etag: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    satisfiesPzs: s.optional(s.boolean()),
    createTime: s.optional(s.string()),
    loggingConfig: s.optional(s.lazy(() => loggingConfig1Schema)),
    retryPolicy: s.optional(s.lazy(() => googleCloudEventarcV1PipelineRetryPolicy2Schema)),
    cryptoKeyName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
