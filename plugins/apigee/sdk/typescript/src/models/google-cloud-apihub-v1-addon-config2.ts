import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AllDataAddonConfig2Schema,
  type GoogleCloudApihubV1AllDataAddonConfig2,
} from "./google-cloud-apihub-v1-all-data-addon-config2.js";
import {
  googleCloudApihubV1GatewayPluginAddonConfig2Schema,
  type GoogleCloudApihubV1GatewayPluginAddonConfig2,
} from "./google-cloud-apihub-v1-gateway-plugin-addon-config2.js";

/**
 * Required. The config of the addon to be managed. This config will replace the config present in
 * the addon. The type of the config should match the config type already present in the addon.
 */
export type GoogleCloudApihubV1AddonConfig2 = {
  /** Configuration for gateway plugin addons. */
  gatewayPluginAddonConfig?: GoogleCloudApihubV1GatewayPluginAddonConfig2;
  /** Configuration for addons which act on all data in the API hub. */
  allDataAddonConfig?: GoogleCloudApihubV1AllDataAddonConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AddonConfig2Schema: Schema<GoogleCloudApihubV1AddonConfig2> =
  s.object<GoogleCloudApihubV1AddonConfig2>(
    {
      gatewayPluginAddonConfig: s.optional(s.lazy(() => googleCloudApihubV1GatewayPluginAddonConfig2Schema)),
      allDataAddonConfig: s.optional(s.lazy(() => googleCloudApihubV1AllDataAddonConfig2Schema)),
    },
    { additionalProperties: s.json() },
  );
