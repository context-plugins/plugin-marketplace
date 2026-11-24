import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Network Configuration that can be inherited by other protos. */
export type NetworkConfig = {
  /**
   * Required. Name of the NetworkAttachment that allows access to the customer's VPC. Format:
   * `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`
   */
  networkAttachment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkConfigSchema: Schema<NetworkConfig> = s.object<NetworkConfig>(
  {
    networkAttachment: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
