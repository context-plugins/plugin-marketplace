import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AddonConfig2Schema,
  type GoogleCloudApihubV1AddonConfig2,
} from "./google-cloud-apihub-v1-addon-config2.js";

/** The ManageAddonConfig method's request. */
export type GoogleCloudApihubV1ManageAddonConfigRequest = {
  /**
   * Required. The config of the addon to be managed. This config will replace the config present in
   * the addon. The type of the config should match the config type already present in the addon.
   */
  config?: GoogleCloudApihubV1AddonConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ManageAddonConfigRequestSchema: Schema<GoogleCloudApihubV1ManageAddonConfigRequest> =
  s.object<GoogleCloudApihubV1ManageAddonConfigRequest>(
    {
      config: s.optional(s.lazy(() => googleCloudApihubV1AddonConfig2Schema)),
    },
    { additionalProperties: s.json() },
  );
