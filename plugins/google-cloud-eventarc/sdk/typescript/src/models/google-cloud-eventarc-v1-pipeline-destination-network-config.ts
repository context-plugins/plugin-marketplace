import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents a network config to be used for destination resolution and connectivity. */
export type GoogleCloudEventarcV1PipelineDestinationNetworkConfig = {
  /**
   * Required. Name of the NetworkAttachment that allows access to the consumer VPC. Format:
   * `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`
   */
  networkAttachment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineDestinationNetworkConfigSchema: Schema<GoogleCloudEventarcV1PipelineDestinationNetworkConfig> =
  s.object<GoogleCloudEventarcV1PipelineDestinationNetworkConfig>(
    {
      networkAttachment: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
