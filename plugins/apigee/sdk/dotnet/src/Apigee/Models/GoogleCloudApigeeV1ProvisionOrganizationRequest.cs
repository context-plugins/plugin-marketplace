using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for ProvisionOrganization.
/// </summary>
public record GoogleCloudApigeeV1ProvisionOrganizationRequest
{
    /// <summary>
    /// Primary Cloud Platform region for analytics data storage. For valid values, see <see href="https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision">Create an organization</see>. Defaults to <c>us-west1</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsRegion")]
    public string? AnalyticsRegion { get; init; }

    /// <summary>
    /// Cloud Platform location for the runtime instance. Defaults to zone <c>us-west1-a</c>. If a region is provided, <c>EVAL</c> organizations will use the region for automatically selecting a zone for the runtime instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeLocation")]
    public string? RuntimeLocation { get; init; }

    /// <summary>
    /// Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See <see href="https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started">Getting started with the Service Networking API</see>. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See <see href="https://cloud.google.com/vpc/docs/shared-vpc">Shared VPC overview</see>. To use a shared VPC network, use the following format: <c>projects/{host-project-id}/{region}/networks/{network-name}</c>. For example: <c>projects/my-sharedvpc-host/global/networks/mynetwork</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizedNetwork")]
    public string? AuthorizedNetwork { get; init; }

    /// <summary>
    /// Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. <b>Note:</b> Apigee will be deprecating the vpc peering model that requires you to provide 'authorizedNetwork', by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableVpcPeering")]
    public bool? DisableVpcPeering { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
