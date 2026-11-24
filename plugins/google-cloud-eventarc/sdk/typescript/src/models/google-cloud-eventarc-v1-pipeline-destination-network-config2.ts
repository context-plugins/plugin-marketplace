import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Network config is used to configure how Pipeline resolves and connects to a
 * destination.
 */
export type GoogleCloudEventarcV1PipelineDestinationNetworkConfig2 = {
  /**
   * Required. Name of the NetworkAttachment that allows access to the consumer VPC. Format:
   * `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`
   */
  networkAttachment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineDestinationNetworkConfig2Schema: Schema<GoogleCloudEventarcV1PipelineDestinationNetworkConfig2> =
  s.object<GoogleCloudEventarcV1PipelineDestinationNetworkConfig2>(
    {
      networkAttachment: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
