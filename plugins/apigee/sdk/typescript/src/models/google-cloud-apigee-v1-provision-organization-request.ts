import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request for ProvisionOrganization. */
export type GoogleCloudApigeeV1ProvisionOrganizationRequest = {
  /**
   * Primary Cloud Platform region for analytics data storage. For valid values, see [Create an
   * organization](https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision). Defaults to
   * `us-west1`.
   */
  analyticsRegion?: string;
  /**
   * Cloud Platform location for the runtime instance. Defaults to zone `us-west1-a`. If a region is
   * provided, `EVAL` organizations will use the region for automatically selecting a zone for the
   * runtime instance.
   */
  runtimeLocation?: string;
  /**
   * Compute Engine network used for Service Networking to be peered with Apigee runtime instances.
   * See [Getting started with the Service Networking
   * API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
   * Apigee also supports shared VPC (that is, the host network project is not the same as the one
   * that is peering with Apigee). See [Shared VPC
   * overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the
   * following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example:
   * `projects/my-sharedvpc-host/global/networks/mynetwork`
   */
  authorizedNetwork?: string;
  /**
   * Optional. Flag that specifies whether the VPC Peering through Private Google Access should be
   * disabled between the consumer network and Apigee. Required if an authorizedNetwork on the
   * consumer project is not provided, in which case the flag should be set to true. The value must
   * be set before the creation of any Apigee runtime instance and can be updated only when there
   * are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that
   * requires you to provide 'authorizedNetwork', by making the non-peering model as the default way
   * of provisioning Apigee organization in future. So, this will be a temporary flag to enable the
   * transition. Not supported for Apigee hybrid.
   */
  disableVpcPeering?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ProvisionOrganizationRequestSchema: Schema<GoogleCloudApigeeV1ProvisionOrganizationRequest> =
  s.object<GoogleCloudApigeeV1ProvisionOrganizationRequest>(
    {
      analyticsRegion: s.optional(s.string()),
      runtimeLocation: s.optional(s.string()),
      authorizedNetwork: s.optional(s.string()),
      disableVpcPeering: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
