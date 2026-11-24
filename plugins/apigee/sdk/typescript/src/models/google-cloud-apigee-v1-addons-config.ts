import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AdvancedApiOpsConfigSchema,
  type GoogleCloudApigeeV1AdvancedApiOpsConfig,
} from "./google-cloud-apigee-v1-advanced-api-ops-config.js";
import {
  googleCloudApigeeV1AnalyticsConfig2Schema,
  type GoogleCloudApigeeV1AnalyticsConfig2,
} from "./google-cloud-apigee-v1-analytics-config2.js";
import {
  googleCloudApigeeV1ApiSecurityConfig2Schema,
  type GoogleCloudApigeeV1ApiSecurityConfig2,
} from "./google-cloud-apigee-v1-api-security-config2.js";
import {
  googleCloudApigeeV1ConnectorsPlatformConfigSchema,
  type GoogleCloudApigeeV1ConnectorsPlatformConfig,
} from "./google-cloud-apigee-v1-connectors-platform-config.js";
import {
  googleCloudApigeeV1IntegrationConfigSchema,
  type GoogleCloudApigeeV1IntegrationConfig,
} from "./google-cloud-apigee-v1-integration-config.js";
import {
  googleCloudApigeeV1MonetizationConfigSchema,
  type GoogleCloudApigeeV1MonetizationConfig,
} from "./google-cloud-apigee-v1-monetization-config.js";

/** Add-on configurations for the Apigee organization. */
export type GoogleCloudApigeeV1AddonsConfig = {
  /** Configuration for the Monetization add-on. */
  monetizationConfig?: GoogleCloudApigeeV1MonetizationConfig;
  /** Configuration for the API Security add-on. */
  apiSecurityConfig?: GoogleCloudApigeeV1ApiSecurityConfig2;
  /** Configuration for the Integration add-on. */
  integrationConfig?: GoogleCloudApigeeV1IntegrationConfig;
  /** Configuration for the Connectors Platform add-on. */
  connectorsPlatformConfig?: GoogleCloudApigeeV1ConnectorsPlatformConfig;
  /**
   * Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig.
   */
  analyticsConfig?: GoogleCloudApigeeV1AnalyticsConfig2;
  /** Configuration for the Advanced API Ops add-on. */
  advancedApiOpsConfig?: GoogleCloudApigeeV1AdvancedApiOpsConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AddonsConfigSchema: Schema<GoogleCloudApigeeV1AddonsConfig> =
  s.object<GoogleCloudApigeeV1AddonsConfig>(
    {
      monetizationConfig: s.optional(s.lazy(() => googleCloudApigeeV1MonetizationConfigSchema)),
      apiSecurityConfig: s.optional(s.lazy(() => googleCloudApigeeV1ApiSecurityConfig2Schema)),
      integrationConfig: s.optional(s.lazy(() => googleCloudApigeeV1IntegrationConfigSchema)),
      connectorsPlatformConfig: s.optional(s.lazy(() => googleCloudApigeeV1ConnectorsPlatformConfigSchema)),
      analyticsConfig: s.optional(s.lazy(() => googleCloudApigeeV1AnalyticsConfig2Schema)),
      advancedApiOpsConfig: s.optional(s.lazy(() => googleCloudApigeeV1AdvancedApiOpsConfigSchema)),
    },
    { additionalProperties: s.json() },
  );
