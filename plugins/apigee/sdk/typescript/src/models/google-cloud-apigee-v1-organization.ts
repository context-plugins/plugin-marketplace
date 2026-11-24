import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingTypeSchema, type BillingType } from "./billing-type.js";
import {
  googleCloudApigeeV1AddonsConfig3Schema,
  type GoogleCloudApigeeV1AddonsConfig3,
} from "./google-cloud-apigee-v1-addons-config3.js";
import {
  googleCloudApigeeV1Properties4Schema,
  type GoogleCloudApigeeV1Properties4,
} from "./google-cloud-apigee-v1-properties4.js";
import { runtimeTypeSchema, type RuntimeType } from "./runtime-type.js";
import { state2Schema, type State2 } from "./state2.js";
import { subscriptionPlanSchema, type SubscriptionPlan } from "./subscription-plan.js";
import { subscriptionTypeSchema, type SubscriptionType } from "./subscription-type.js";
import { typeSchema, type Type } from "./type.js";

export type GoogleCloudApigeeV1Organization = {
  /** Output only. Subscription plan that the customer has purchased. Output only. */
  subscriptionPlan?: SubscriptionPlan;
  /**
   * Output only. Apigee Project ID associated with the organization. Use this project to allowlist
   * Apigee in the Service Attachment when using private service connect with Apigee.
   */
  apigeeProjectId?: string;
  /** Not used by Apigee. */
  attributes?: string[];
  /** Optional. Properties defined in the Apigee organization profile. */
  properties?: GoogleCloudApigeeV1Properties4;
  /**
   * Optional. Compute Engine network used for Service Networking to be peered with Apigee runtime
   * instances. See [Getting started with the Service Networking
   * API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
   * Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the
   * creation of a runtime instance and can be updated only when there are no runtime instances. For
   * example: `default`. When changing authorizedNetwork, you must reconfigure VPC peering. After
   * VPC peering with previous network is deleted, [run the following
   * command](https://cloud.google.com/sdk/gcloud/reference/services/vpc-peerings/delete): `gcloud
   * services vpc-peerings delete --network=NETWORK`, where `NETWORK` is the name of the previous
   * network. This will delete the previous Service Networking. Otherwise, you will get the
   * following error: `The resource 'projects/...-tp' is already linked to another shared VPC host
   * 'projects/...-tp`. Apigee also supports shared VPC (that is, the host network project is not
   * the same as the one that is peering with Apigee). See [Shared VPC
   * overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the
   * following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example:
   * `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee
   * hybrid.
   */
  authorizedNetwork?: string;
  /**
   * Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.
   */
  runtimeType?: RuntimeType;
  /** Output only. List of environments in the Apigee organization. */
  environments?: string[];
  /** Not used by Apigee. */
  customerName?: string;
  /** Output only. Name of the Apigee organization. */
  name?: string;
  /**
   * Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of
   * the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes
   * only) or paid (full subscription has been purchased). See [Apigee
   * pricing](https://cloud.google.com/apigee/pricing/).
   *
   * @deprecated
   */
  subscriptionType?: SubscriptionType;
  /**
   * Output only. State of the organization. Values other than ACTIVE means the resource is not
   * ready to use.
   */
  state?: State2;
  /**
   * Optional. Flag that specifies whether the VPC Peering through Private Google Access should be
   * disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD.
   * Required if an authorizedNetwork on the consumer project is not provided, in which case the
   * flag should be set to true. The value must be set before the creation of any Apigee runtime
   * instance and can be updated only when there are no runtime instances. **Note:** Apigee will be
   * deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making
   * the non-peering model as the default way of provisioning Apigee organization in future. So,
   * this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.
   */
  disableVpcPeering?: boolean;
  /** Optional. Display name for the Apigee organization. Unused, but reserved for future use. */
  displayName?: string;
  /** Not used by Apigee. */
  type?: Type;
  /**
   * Output only. Base64-encoded public certificates for the root CA of the Apigee organization.
   * Valid only when [RuntimeType](#RuntimeType) is `CLOUD`. Multiple certificates are used to
   * support certificate rotation.
   */
  caCertificates?: string[];
  /**
   * Optional. Flag that specifies if internet egress is restricted for VPC Service Controls. Valid
   * only when runtime_type is `CLOUD` and disable_vpc_peering is `true`.
   */
  networkEgressRestricted?: boolean;
  /**
   * Optional. Cloud KMS key name used for encrypting control plane data that is stored in a multi
   * region. Only used for the data residency region "US" or "EU". If not specified or
   * [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used.
   * Format: `projects/*&#47;locations/*&#47;keyRings/*&#47;cryptoKeys/*`
   */
  controlPlaneEncryptionKeyName?: string;
  /**
   * Optional. This field is needed only for customers using non-default data residency regions.
   * Apigee stores some control plane data only in single region. This field determines which single
   * region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2"
   * when control plane is in EU.
   */
  apiConsumerDataLocation?: string;
  /** Optional. Description of the Apigee organization. */
  description?: string;
  /**
   * Required. DEPRECATED: This field will eventually be deprecated and replaced with a
   * differently-named field. Primary Google Cloud region for analytics data storage. For valid
   * values, see [Create an Apigee
   * organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
   *
   * @deprecated
   */
  analyticsRegion?: string;
  /** Output only. Time that the Apigee organization is scheduled for deletion. */
  expiresAt?: string;
  /**
   * Output only. Deprecated: Use `ca_certificates` instead. Base64-encoded public certificate for
   * the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is `CLOUD`.
   *
   * @deprecated
   */
  caCertificate?: string;
  /**
   * Optional. Cloud KMS key name used for encrypting API consumer data. If not specified or
   * [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used.
   * Format: `projects/*&#47;locations/*&#47;keyRings/*&#47;cryptoKeys/*`
   */
  apiConsumerDataEncryptionKeyName?: string;
  /** Optional. Configuration for the Portals settings. */
  portalDisabled?: boolean;
  /** Output only. Project ID associated with the Apigee organization. */
  projectId?: string;
  /**
   * Output only. Time that the Apigee organization was last modified in milliseconds since epoch.
   */
  lastModifiedAt?: string;
  /**
   * Optional. Billing type of the Apigee organization. See [Apigee
   * pricing](https://cloud.google.com/apigee/pricing).
   */
  billingType?: BillingType;
  /** Optional. Addon configurations of the Apigee organization. */
  addonsConfig?: GoogleCloudApigeeV1AddonsConfig3;
  /**
   * Optional. Cloud KMS key name used for encrypting the data that is stored and replicated across
   * runtime instances. Update is not allowed after the organization is created. If not specified or
   * [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For
   * example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for
   * Apigee hybrid.
   */
  runtimeDatabaseEncryptionKeyName?: string;
  /** Output only. Time that the Apigee organization was created in milliseconds since epoch. */
  createdAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OrganizationSchema: Schema<GoogleCloudApigeeV1Organization> =
  s.object<GoogleCloudApigeeV1Organization>(
    {
      subscriptionPlan: s.optional(s.lazy(() => subscriptionPlanSchema)),
      apigeeProjectId: s.optional(s.string()),
      attributes: s.optional(s.array(s.string())),
      properties: s.optional(s.lazy(() => googleCloudApigeeV1Properties4Schema)),
      authorizedNetwork: s.optional(s.string()),
      runtimeType: s.optional(s.lazy(() => runtimeTypeSchema)),
      environments: s.optional(s.array(s.string())),
      customerName: s.optional(s.string()),
      name: s.optional(s.string()),
      subscriptionType: s.optional(s.lazy(() => subscriptionTypeSchema)),
      state: s.optional(s.lazy(() => state2Schema)),
      disableVpcPeering: s.optional(s.boolean()),
      displayName: s.optional(s.string()),
      type: s.optional(s.lazy(() => typeSchema)),
      caCertificates: s.optional(s.array(s.string())),
      networkEgressRestricted: s.optional(s.boolean()),
      controlPlaneEncryptionKeyName: s.optional(s.string()),
      apiConsumerDataLocation: s.optional(s.string()),
      description: s.optional(s.string()),
      analyticsRegion: s.optional(s.string()),
      expiresAt: s.optional(s.string()),
      caCertificate: s.optional(s.string()),
      apiConsumerDataEncryptionKeyName: s.optional(s.string()),
      portalDisabled: s.optional(s.boolean()),
      projectId: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      billingType: s.optional(s.lazy(() => billingTypeSchema)),
      addonsConfig: s.optional(s.lazy(() => googleCloudApigeeV1AddonsConfig3Schema)),
      runtimeDatabaseEncryptionKeyName: s.optional(s.string()),
      createdAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
