import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1RuntimeAnalyticsConfig2Schema,
  type GoogleCloudApigeeV1RuntimeAnalyticsConfig2,
} from "./google-cloud-apigee-v1-runtime-analytics-config2.js";
import {
  googleCloudApigeeV1RuntimeApiSecurityConfig2Schema,
  type GoogleCloudApigeeV1RuntimeApiSecurityConfig2,
} from "./google-cloud-apigee-v1-runtime-api-security-config2.js";
import {
  googleCloudApigeeV1RuntimeSpecGenerationAddonConfig2Schema,
  type GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig2,
} from "./google-cloud-apigee-v1-runtime-spec-generation-addon-config2.js";

/** RuntimeAddonsConfig defines the runtime configurations for add-ons in an environment. */
export type GoogleCloudApigeeV1RuntimeAddonsConfig = {
  /**
   * Name of the addons config in the format: `organizations/{org}/environments/{env}/addonsConfig`
   */
  name?: string;
  /** Revision number used by the runtime to detect config changes. */
  revisionId?: string;
  /** Runtime configuration for API Security add-on. */
  apiSecurityConfig?: GoogleCloudApigeeV1RuntimeApiSecurityConfig2;
  /** Runtime configuration for Analytics add-on. */
  analyticsConfig?: GoogleCloudApigeeV1RuntimeAnalyticsConfig2;
  /**
   * UID is to detect if config is recreated after deletion. The add-on config will only be deleted
   * when the environment itself gets deleted, thus it will always be the same as the UID of
   * EnvironmentConfig.
   */
  uid?: string;
  /** Runtime configuration for Spec Generation add-on. */
  specGenerationConfig?: GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeAddonsConfigSchema: Schema<GoogleCloudApigeeV1RuntimeAddonsConfig> =
  s.object<GoogleCloudApigeeV1RuntimeAddonsConfig>(
    {
      name: s.optional(s.string()),
      revisionId: s.optional(s.string()),
      apiSecurityConfig: s.optional(s.lazy(() => googleCloudApigeeV1RuntimeApiSecurityConfig2Schema)),
      analyticsConfig: s.optional(s.lazy(() => googleCloudApigeeV1RuntimeAnalyticsConfig2Schema)),
      uid: s.optional(s.string()),
      specGenerationConfig: s.optional(
        s.lazy(() => googleCloudApigeeV1RuntimeSpecGenerationAddonConfig2Schema),
      ),
    },
    { additionalProperties: s.json() },
  );
