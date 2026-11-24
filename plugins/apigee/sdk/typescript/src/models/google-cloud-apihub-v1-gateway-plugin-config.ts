import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ApigeeEdgeConfig2Schema,
  type GoogleCloudApihubV1ApigeeEdgeConfig2,
} from "./google-cloud-apihub-v1-apigee-edge-config2.js";
import {
  googleCloudApihubV1ApigeeOpdkConfig2Schema,
  type GoogleCloudApihubV1ApigeeOpdkConfig2,
} from "./google-cloud-apihub-v1-apigee-opdk-config2.js";
import {
  googleCloudApihubV1ApigeeXHybridConfig2Schema,
  type GoogleCloudApihubV1ApigeeXHybridConfig2,
} from "./google-cloud-apihub-v1-apigee-xhybrid-config2.js";

/** Configuration for a gateway plugin. This is used to specify configs for different gateways. */
export type GoogleCloudApihubV1GatewayPluginConfig = {
  /** Configuration for Apigee OPDK gateways. */
  apigeeOpdkConfig?: GoogleCloudApihubV1ApigeeOpdkConfig2;
  /** Configuration for Apigee Edge gateways. */
  apigeeEdgeConfig?: GoogleCloudApihubV1ApigeeEdgeConfig2;
  /** Configuration for Apigee X and Apigee Hybrid gateways. */
  apigeeXHybridConfig?: GoogleCloudApihubV1ApigeeXHybridConfig2;
  /**
   * Required. The name of the gateway plugin instance for which the config is to be specified.
   * Format:
   * projects/{project}/locations/{location}/plugins/{plugin}/pluginInstances/{plugin_instance}
   */
  pluginInstance?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GatewayPluginConfigSchema: Schema<GoogleCloudApihubV1GatewayPluginConfig> =
  s.object<GoogleCloudApihubV1GatewayPluginConfig>(
    {
      apigeeOpdkConfig: s.optional(s.lazy(() => googleCloudApihubV1ApigeeOpdkConfig2Schema)),
      apigeeEdgeConfig: s.optional(s.lazy(() => googleCloudApihubV1ApigeeEdgeConfig2Schema)),
      apigeeXHybridConfig: s.optional(s.lazy(() => googleCloudApihubV1ApigeeXHybridConfig2Schema)),
      pluginInstance: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
