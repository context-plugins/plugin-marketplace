using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

public record GoogleCloudApigeeV1Organization
{
    /// <summary>
    /// Output only. Subscription plan that the customer has purchased. Output only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscriptionPlan")]
    public SubscriptionPlan? SubscriptionPlan { get; init; }

    /// <summary>
    /// Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apigeeProjectId")]
    public string? ApigeeProjectId { get; init; }

    /// <summary>
    /// Not used by Apigee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<string>? Attributes { get; init; }

    /// <summary>
    /// Optional. Properties defined in the Apigee organization profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public GoogleCloudApigeeV1Properties4? Properties { get; init; }

    /// <summary>
    /// Optional. Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See <see href="https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started">Getting started with the Service Networking API</see>. Valid only when <see href="#RuntimeType">RuntimeType</see> is set to <c>CLOUD</c>. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: <c>default</c>. When changing authorizedNetwork, you must reconfigure VPC peering. After VPC peering with previous network is deleted, <see href="https://cloud.google.com/sdk/gcloud/reference/services/vpc-peerings/delete">run the following command</see>: <c>gcloud services vpc-peerings delete --network=NETWORK</c>, where <c>NETWORK</c> is the name of the previous network. This will delete the previous Service Networking. Otherwise, you will get the following error: <c>The resource 'projects/...-tp' is already linked to another shared VPC host 'projects/...-tp</c>. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See <see href="https://cloud.google.com/vpc/docs/shared-vpc">Shared VPC overview</see>. To use a shared VPC network, use the following format: <c>projects/{host-project-id}/{region}/networks/{network-name}</c>. For example: <c>projects/my-sharedvpc-host/global/networks/mynetwork</c> <b>Note:</b> Not supported for Apigee hybrid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizedNetwork")]
    public string? AuthorizedNetwork { get; init; }

    /// <summary>
    /// Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeType")]
    public RuntimeType? RuntimeType { get; init; }

    /// <summary>
    /// Output only. List of environments in the Apigee organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environments")]
    public IReadOnlyList<string>? Environments { get; init; }

    /// <summary>
    /// Not used by Apigee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerName")]
    public string? CustomerName { get; init; }

    /// <summary>
    /// Output only. Name of the Apigee organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See <see href="https://cloud.google.com/apigee/pricing/">Apigee pricing</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscriptionType")]
    public SubscriptionType? SubscriptionType { get; init; }

    /// <summary>
    /// Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State2? State { get; init; }

    /// <summary>
    /// Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. <b>Note:</b> Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableVpcPeering")]
    public bool? DisableVpcPeering { get; init; }

    /// <summary>
    /// Optional. Display name for the Apigee organization. Unused, but reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Not used by Apigee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// Output only. Base64-encoded public certificates for the root CA of the Apigee organization. Valid only when <see href="#RuntimeType">RuntimeType</see> is <c>CLOUD</c>. Multiple certificates are used to support certificate rotation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caCertificates")]
    public IReadOnlyList<string>? CaCertificates { get; init; }

    /// <summary>
    /// Optional. Flag that specifies if internet egress is restricted for VPC Service Controls. Valid only when runtime_type is <c>CLOUD</c> and disable_vpc_peering is <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkEgressRestricted")]
    public bool? NetworkEgressRestricted { get; init; }

    /// <summary>
    /// Optional. Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Only used for the data residency region "US" or "EU". If not specified or <see href="#BillingType">BillingType</see> is <c>EVALUATION</c>, a Google-Managed encryption key will be used. Format: <c>projects/*/locations/*/keyRings/*/cryptoKeys/*</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("controlPlaneEncryptionKeyName")]
    public string? ControlPlaneEncryptionKeyName { get; init; }

    /// <summary>
    /// Optional. This field is needed only for customers using non-default data residency regions. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2" when control plane is in EU.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiConsumerDataLocation")]
    public string? ApiConsumerDataLocation { get; init; }

    /// <summary>
    /// Optional. Description of the Apigee organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field. Primary Google Cloud region for analytics data storage. For valid values, see <see href="https://cloud.google.com/apigee/docs/api-platform/get-started/create-org">Create an Apigee organization</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsRegion")]
    public string? AnalyticsRegion { get; init; }

    /// <summary>
    /// Output only. Time that the Apigee organization is scheduled for deletion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public string? ExpiresAt { get; init; }

    /// <summary>
    /// Output only. Deprecated: Use <c>ca_certificates</c> instead. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when <see href="#RuntimeType">RuntimeType</see> is <c>CLOUD</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caCertificate")]
    public string? CaCertificate { get; init; }

    /// <summary>
    /// Optional. Cloud KMS key name used for encrypting API consumer data. If not specified or <see href="#BillingType">BillingType</see> is <c>EVALUATION</c>, a Google-Managed encryption key will be used. Format: <c>projects/*/locations/*/keyRings/*/cryptoKeys/*</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiConsumerDataEncryptionKeyName")]
    public string? ApiConsumerDataEncryptionKeyName { get; init; }

    /// <summary>
    /// Optional. Configuration for the Portals settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("portalDisabled")]
    public bool? PortalDisabled { get; init; }

    /// <summary>
    /// Output only. Project ID associated with the Apigee organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectId")]
    public string? ProjectId { get; init; }

    /// <summary>
    /// Output only. Time that the Apigee organization was last modified in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    /// <summary>
    /// Optional. Billing type of the Apigee organization. See <see href="https://cloud.google.com/apigee/pricing">Apigee pricing</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public BillingType? BillingType { get; init; }

    /// <summary>
    /// Optional. Addon configurations of the Apigee organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addonsConfig")]
    public GoogleCloudApigeeV1AddonsConfig3? AddonsConfig { get; init; }

    /// <summary>
    /// Optional. Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified or <see href="#RuntimeType">RuntimeType</see> is <c>TRIAL</c>, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". <b>Note:</b> Not supported for Apigee hybrid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeDatabaseEncryptionKeyName")]
    public string? RuntimeDatabaseEncryptionKeyName { get; init; }

    /// <summary>
    /// Output only. Time that the Apigee organization was created in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
