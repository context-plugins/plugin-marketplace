import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApimServiceExtensionExtensionSchema,
  type GoogleCloudApigeeV1ApimServiceExtensionExtension,
} from "./google-cloud-apigee-v1-apim-service-extension-extension.js";
import {
  googleCloudApigeeV1ApimServiceExtensionNetworkConfigSchema,
  type GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig,
} from "./google-cloud-apigee-v1-apim-service-extension-network-config.js";
import { state12Schema, type State12 } from "./state12.js";

/**
 * APIM Service Extension is a resource under an Apigee Organization that is used to create APIM
 * Service Extension to route traffic to existing X instances.
 */
export type GoogleCloudApigeeV1ApimServiceExtension = {
  /**
   * Identifier. unique name of the APIM service extension. The name must conform with RFC-1034, is
   * restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63
   * characters. Additionally, the first character must be a letter and the last a letter or a
   * number.
   */
  name?: string;
  /** Required. List of network configurations for the APIM service extension. */
  networkConfigs?: GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig[];
  /**
   * Optional. List of extensions that are part of the service extension. Refer to
   * https://cloud.google.com/service-extensions/docs/quotas#limits for any limits.
   */
  extensions?: GoogleCloudApigeeV1ApimServiceExtensionExtension[];
  /**
   * Required. The network where the forwarding rule is created. Format:
   * projects/{project}/global/networks/{network}
   */
  network?: string;
  /**
   * Output only. State of the APIM service extension. Values other than `ACTIVE` mean the resource
   * is not ready to use.
   */
  state?: State12;
  /** Output only. The time that this resource was updated on the server. */
  updateTime?: string;
  /** Required. Name of the proxy deployed in the Apigee X instance. */
  extensionProcessor?: string;
  /**
   * Required. Name of the Google Cloud LB forwarding rule. Format:
   * projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}
   * projects/{project}/global/forwardingRules/{forwarding_rule}
   */
  lbForwardingRule?: string;
  /** Output only. The time that this resource was created on the server. */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApimServiceExtensionSchema: Schema<GoogleCloudApigeeV1ApimServiceExtension> =
  s.object<GoogleCloudApigeeV1ApimServiceExtension>(
    {
      name: s.optional(s.string()),
      networkConfigs: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1ApimServiceExtensionNetworkConfigSchema)),
      ),
      extensions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApimServiceExtensionExtensionSchema))),
      network: s.optional(s.string()),
      state: s.optional(s.lazy(() => state12Schema)),
      updateTime: s.optional(s.string()),
      extensionProcessor: s.optional(s.string()),
      lbForwardingRule: s.optional(s.string()),
      createTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
