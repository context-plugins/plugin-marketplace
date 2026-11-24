import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1GatewayPluginConfigSchema,
  type GoogleCloudApihubV1GatewayPluginConfig,
} from "./google-cloud-apihub-v1-gateway-plugin-config.js";

/** Configuration for gateway plugin addons. */
export type GoogleCloudApihubV1GatewayPluginAddonConfig2 = {
  /**
   * Required. The list of gateway plugin configs for which the addon is enabled. Each gateway
   * plugin config should have a unique plugin instance.
   */
  gatewayPluginConfigs?: GoogleCloudApihubV1GatewayPluginConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GatewayPluginAddonConfig2Schema: Schema<GoogleCloudApihubV1GatewayPluginAddonConfig2> =
  s.object<GoogleCloudApihubV1GatewayPluginAddonConfig2>(
    {
      gatewayPluginConfigs: s.optional(s.array(s.lazy(() => googleCloudApihubV1GatewayPluginConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
