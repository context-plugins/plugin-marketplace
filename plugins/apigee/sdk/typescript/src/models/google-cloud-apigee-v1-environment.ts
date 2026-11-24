import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiProxyType1Schema, type ApiProxyType1 } from "./api-proxy-type1.js";
import { deploymentTypeSchema, type DeploymentType } from "./deployment-type.js";
import {
  googleCloudApigeeV1EnvironmentClientIpResolutionConfig2Schema,
  type GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2,
} from "./google-cloud-apigee-v1-environment-client-ip-resolution-config2.js";
import {
  googleCloudApigeeV1NodeConfig2Schema,
  type GoogleCloudApigeeV1NodeConfig2,
} from "./google-cloud-apigee-v1-node-config2.js";
import {
  googleCloudApigeeV1Properties3Schema,
  type GoogleCloudApigeeV1Properties3,
} from "./google-cloud-apigee-v1-properties3.js";
import { state9Schema, type State9 } from "./state9.js";
import { type7Schema, type Type7 } from "./type7.js";

export type GoogleCloudApigeeV1Environment = {
  /** Optional. Key-value pairs that may be used for customizing the environment. */
  properties?: GoogleCloudApigeeV1Properties3;
  /**
   * Optional. URI of the forward proxy to be applied to the runtime instances in this environment.
   * Must be in the format of {scheme}://{hostname}:{port}. Note that the only supported scheme is
   * "http". The port must be supplied. To remove a forward proxy setting, update the field to an
   * empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing
   * environment fail if the environment has nodeConfig set up. To successfully add the
   * forwardProxyUri setting in this case, include the NodeConfig details with the request.
   */
  forwardProxyUri?: string;
  /** Optional. NodeConfig of the environment. */
  nodeConfig?: GoogleCloudApigeeV1NodeConfig2;
  /** Optional. Description of the environment. */
  description?: string;
  /** Output only. Creation time of this environment as milliseconds since epoch. */
  createdAt?: string;
  /**
   * Optional. API Proxy type supported by the environment. The type can be set when creating the
   * Environment and cannot be changed.
   */
  apiProxyType?: ApiProxyType1;
  /** Optional. Display name for this environment. */
  displayName?: string;
  /**
   * Required. Name of the environment. Values must match the regular expression
   * `^[.\\p{Alnum}-_]{1,255}$`
   */
  name?: string;
  /**
   * Output only. State of the environment. Values other than ACTIVE means the resource is not ready
   * to use.
   */
  state?: State9;
  /**
   * Optional. The algorithm to resolve IP. This will affect Analytics, API Security, and other
   * features that use the client ip. To remove a client ip resolution config, update the field to
   * an empty value. Example: '{ "clientIpResolutionConfig" = {} }' For more information, see:
   * https://cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution.
   */
  clientIpResolutionConfig?: GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2;
  hasAttachedFlowHooks?: boolean;
  /** Optional. EnvironmentType selected for the environment. */
  type?: Type7;
  /**
   * Optional. Deployment type supported by the environment. The deployment type can be set when
   * creating the environment and cannot be changed. When you enable archive deployment, you will be
   * **prevented from performing** a [subset of
   * actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the
   * environment, including: * Managing the deployment of API proxy or shared flow revisions *
   * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers
   */
  deploymentType?: DeploymentType;
  /** Output only. Last modification time of this environment as milliseconds since epoch. */
  lastModifiedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentSchema: Schema<GoogleCloudApigeeV1Environment> =
  s.object<GoogleCloudApigeeV1Environment>(
    {
      properties: s.optional(s.lazy(() => googleCloudApigeeV1Properties3Schema)),
      forwardProxyUri: s.optional(s.string()),
      nodeConfig: s.optional(s.lazy(() => googleCloudApigeeV1NodeConfig2Schema)),
      description: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      apiProxyType: s.optional(s.lazy(() => apiProxyType1Schema)),
      displayName: s.optional(s.string()),
      name: s.optional(s.string()),
      state: s.optional(s.lazy(() => state9Schema)),
      clientIpResolutionConfig: s.optional(
        s.lazy(() => googleCloudApigeeV1EnvironmentClientIpResolutionConfig2Schema),
      ),
      hasAttachedFlowHooks: s.optional(s.boolean()),
      type: s.optional(s.lazy(() => type7Schema)),
      deploymentType: s.optional(s.lazy(() => deploymentTypeSchema)),
      lastModifiedAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
