import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DataCollectorConfigSchema,
  type GoogleCloudApigeeV1DataCollectorConfig,
} from "./google-cloud-apigee-v1-data-collector-config.js";
import {
  googleCloudApigeeV1DebugMask1Schema,
  type GoogleCloudApigeeV1DebugMask1,
} from "./google-cloud-apigee-v1-debug-mask1.js";
import {
  googleCloudApigeeV1DeploymentConfigSchema,
  type GoogleCloudApigeeV1DeploymentConfig,
} from "./google-cloud-apigee-v1-deployment-config.js";
import {
  googleCloudApigeeV1DeploymentGroupConfigSchema,
  type GoogleCloudApigeeV1DeploymentGroupConfig,
} from "./google-cloud-apigee-v1-deployment-group-config.js";
import {
  googleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1Schema,
  type GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1,
} from "./google-cloud-apigee-v1-environment-config-client-ip-resolution-config1.js";
import {
  googleCloudApigeeV1FlowHookConfigSchema,
  type GoogleCloudApigeeV1FlowHookConfig,
} from "./google-cloud-apigee-v1-flow-hook-config.js";
import {
  googleCloudApigeeV1KeystoreConfigSchema,
  type GoogleCloudApigeeV1KeystoreConfig,
} from "./google-cloud-apigee-v1-keystore-config.js";
import {
  googleCloudApigeeV1ReferenceConfigSchema,
  type GoogleCloudApigeeV1ReferenceConfig,
} from "./google-cloud-apigee-v1-reference-config.js";
import {
  googleCloudApigeeV1ResourceConfigSchema,
  type GoogleCloudApigeeV1ResourceConfig,
} from "./google-cloud-apigee-v1-resource-config.js";
import {
  googleCloudApigeeV1RuntimeAddonsConfig1Schema,
  type GoogleCloudApigeeV1RuntimeAddonsConfig1,
} from "./google-cloud-apigee-v1-runtime-addons-config1.js";
import {
  googleCloudApigeeV1RuntimeTraceConfig1Schema,
  type GoogleCloudApigeeV1RuntimeTraceConfig1,
} from "./google-cloud-apigee-v1-runtime-trace-config1.js";
import {
  googleCloudApigeeV1TargetServerConfigSchema,
  type GoogleCloudApigeeV1TargetServerConfig,
} from "./google-cloud-apigee-v1-target-server-config.js";

export type GoogleCloudApigeeV1EnvironmentConfig = {
  /**
   * Revision ID of the environment configuration. The higher the value, the more recently the
   * configuration was deployed.
   */
  revisionId?: string;
  /** List of flow hooks in the environment. */
  flowhooks?: GoogleCloudApigeeV1FlowHookConfig[];
  /**
   * The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used
   * by Envoy-based gateways.
   */
  gatewayConfigLocation?: string;
  /** Name of the PubSub topic for the environment. */
  pubsubTopic?: string;
  /**
   * Name of the environment configuration in the following format:
   * `organizations/{org}/environments/{env}/configs/{config}`
   */
  name?: string;
  /** The latest runtime configurations for add-ons. */
  addonsConfig?: GoogleCloudApigeeV1RuntimeAddonsConfig1;
  /**
   * The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based
   * authentication as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.
   */
  arcConfigLocation?: string;
  /** List of deployments in the environment. */
  deployments?: GoogleCloudApigeeV1DeploymentConfig[];
  /**
   * Unique ID for the environment configuration. The ID will only change if the environment is
   * deleted and recreated.
   */
  uid?: string;
  /** List of resource references in the environment. */
  resourceReferences?: GoogleCloudApigeeV1ReferenceConfig[];
  /** List of deployment groups in the environment. */
  deploymentGroups?: GoogleCloudApigeeV1DeploymentGroupConfig[];
  /** Debug mask that applies to all deployments in the environment. */
  debugMask?: GoogleCloudApigeeV1DebugMask1;
  /** List of keystores in the environment. */
  keystores?: GoogleCloudApigeeV1KeystoreConfig[];
  /** Time that the environment configuration was created. */
  createTime?: string;
  /**
   * Used by the Control plane to add context information to help detect the source of the document
   * during diagnostics and debugging.
   */
  provider?: string;
  /**
   * Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config.
   * This ID will increment any time a resource not scoped to a deployment group changes.
   */
  envScopedRevisionId?: string;
  /** The algorithm to resolve IP. */
  clientIpResolutionConfig?: GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1;
  /** DEPRECATED: Use revision_id. */
  sequenceNumber?: string;
  /** List of data collectors used by the deployments in the environment. */
  dataCollectors?: GoogleCloudApigeeV1DataCollectorConfig[];
  /**
   * Trace configurations. Contains config for the environment and config overrides for specific API
   * proxies.
   */
  traceConfig?: GoogleCloudApigeeV1RuntimeTraceConfig1;
  /** List of resource versions in the environment. */
  resources?: GoogleCloudApigeeV1ResourceConfig[];
  /** List of target servers in the environment. Disabled target servers are not displayed. */
  targets?: GoogleCloudApigeeV1TargetServerConfig[];
  /**
   * The forward proxy's url to be used by the runtime. When set, runtime will send requests to the
   * target via the given forward proxy. This is only used by programmable gateways.
   */
  forwardProxyUri?: string;
  /** Feature flags inherited from the organization and environment. */
  featureFlags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentConfigSchema: Schema<GoogleCloudApigeeV1EnvironmentConfig> =
  s.object<GoogleCloudApigeeV1EnvironmentConfig>(
    {
      revisionId: s.optional(s.string()),
      flowhooks: s.optional(s.array(s.lazy(() => googleCloudApigeeV1FlowHookConfigSchema))),
      gatewayConfigLocation: s.optional(s.string()),
      pubsubTopic: s.optional(s.string()),
      name: s.optional(s.string()),
      addonsConfig: s.optional(s.lazy(() => googleCloudApigeeV1RuntimeAddonsConfig1Schema)),
      arcConfigLocation: s.optional(s.string()),
      deployments: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DeploymentConfigSchema))),
      uid: s.optional(s.string()),
      resourceReferences: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ReferenceConfigSchema))),
      deploymentGroups: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DeploymentGroupConfigSchema))),
      debugMask: s.optional(s.lazy(() => googleCloudApigeeV1DebugMask1Schema)),
      keystores: s.optional(s.array(s.lazy(() => googleCloudApigeeV1KeystoreConfigSchema))),
      createTime: s.optional(s.string()),
      provider: s.optional(s.string()),
      envScopedRevisionId: s.optional(s.string()),
      clientIpResolutionConfig: s.optional(
        s.lazy(() => googleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1Schema),
      ),
      sequenceNumber: s.optional(s.string()),
      dataCollectors: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DataCollectorConfigSchema))),
      traceConfig: s.optional(s.lazy(() => googleCloudApigeeV1RuntimeTraceConfig1Schema)),
      resources: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ResourceConfigSchema))),
      targets: s.optional(s.array(s.lazy(() => googleCloudApigeeV1TargetServerConfigSchema))),
      forwardProxyUri: s.optional(s.string()),
      featureFlags: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
