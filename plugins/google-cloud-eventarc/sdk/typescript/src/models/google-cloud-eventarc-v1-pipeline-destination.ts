import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudEventarcV1PipelineDestinationAuthenticationConfig2Schema,
  type GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig2,
} from "./google-cloud-eventarc-v1-pipeline-destination-authentication-config2.js";
import {
  googleCloudEventarcV1PipelineDestinationHttpEndpoint1Schema,
  type GoogleCloudEventarcV1PipelineDestinationHttpEndpoint1,
} from "./google-cloud-eventarc-v1-pipeline-destination-http-endpoint1.js";
import {
  googleCloudEventarcV1PipelineDestinationNetworkConfig2Schema,
  type GoogleCloudEventarcV1PipelineDestinationNetworkConfig2,
} from "./google-cloud-eventarc-v1-pipeline-destination-network-config2.js";
import {
  googleCloudEventarcV1PipelineMessagePayloadFormat3Schema,
  type GoogleCloudEventarcV1PipelineMessagePayloadFormat3,
} from "./google-cloud-eventarc-v1-pipeline-message-payload-format3.js";

/** Represents a target of an invocation over HTTP. */
export type GoogleCloudEventarcV1PipelineDestination = {
  /**
   * Optional. The resource name of the Workflow whose Executions are triggered by the events. The
   * Workflow resource should be deployed in the same project as the Pipeline. Format:
   * `projects/{project}/locations/{location}/workflows/{workflow}`
   */
  workflow?: string;
  /**
   * Optional. Network config is used to configure how Pipeline resolves and connects to a
   * destination.
   */
  networkConfig?: GoogleCloudEventarcV1PipelineDestinationNetworkConfig2;
  /**
   * Optional. An HTTP endpoint destination described by an URI. If a DNS FQDN is provided as the
   * endpoint, Pipeline will create a peering zone to the consumer VPC and forward DNS requests to
   * the VPC specified by network config to resolve the service endpoint. See:
   * https://cloud.google.com/dns/docs/zones/zones-overview#peering_zones
   */
  httpEndpoint?: GoogleCloudEventarcV1PipelineDestinationHttpEndpoint1;
  /**
   * Optional. The resource name of the Message Bus to which events should be published. The Message
   * Bus resource should exist in the same project as the Pipeline. Format:
   * `projects/{project}/locations/{location}/messageBuses/{message_bus}`
   */
  messageBus?: string;
  /**
   * Optional. An authentication config used to authenticate message requests, such that
   * destinations can verify the source. For example, this can be used with private Google Cloud
   * destinations that require Google Cloud credentials for access like Cloud Run. This field is
   * optional and should be set only by users interested in authenticated push.
   */
  authenticationConfig?: GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig2;
  /**
   * Optional. The message format before it is delivered to the destination. If not set, the message
   * will be delivered in the format it was originally delivered to the Pipeline. This field can
   * only be set if Pipeline.input_payload_format is also set.
   */
  outputPayloadFormat?: GoogleCloudEventarcV1PipelineMessagePayloadFormat3;
  /**
   * Optional. The resource name of the Pub/Sub topic to which events should be published. Format:
   * `projects/{project}/locations/{location}/topics/{topic}`
   */
  topic?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineDestinationSchema: Schema<GoogleCloudEventarcV1PipelineDestination> =
  s.object<GoogleCloudEventarcV1PipelineDestination>(
    {
      workflow: s.optional(s.string()),
      networkConfig: s.optional(s.lazy(() => googleCloudEventarcV1PipelineDestinationNetworkConfig2Schema)),
      httpEndpoint: s.optional(s.lazy(() => googleCloudEventarcV1PipelineDestinationHttpEndpoint1Schema)),
      messageBus: s.optional(s.string()),
      authenticationConfig: s.optional(
        s.lazy(() => googleCloudEventarcV1PipelineDestinationAuthenticationConfig2Schema),
      ),
      outputPayloadFormat: s.optional(s.lazy(() => googleCloudEventarcV1PipelineMessagePayloadFormat3Schema)),
      topic: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
