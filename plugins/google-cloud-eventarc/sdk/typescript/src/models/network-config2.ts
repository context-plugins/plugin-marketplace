import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Network config is used to configure how Eventarc resolves and connect to a destination.
 * This should only be used with HttpEndpoint destination type.
 */
export type NetworkConfig2 = {
  /**
   * Required. Name of the NetworkAttachment that allows access to the customer's VPC. Format:
   * `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`
   */
  networkAttachment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkConfig2Schema: Schema<NetworkConfig2> = s.object<NetworkConfig2>(
  {
    networkAttachment: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
