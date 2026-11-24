using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Runtime configuration for the organization. Response for GetRuntimeConfig.
/// </summary>
public record GoogleCloudApigeeV1RuntimeConfig
{
    /// <summary>
    /// Output only. Tenant project ID associated with the Apigee organization. The tenant project is used to host Google-managed resources that are dedicated to this Apigee organization. Clients have limited access to resources within the tenant project used to support Apigee runtime instances. Access to the tenant project is managed using SetSyncAuthorization. It can be empty if the tenant project hasn't been created yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tenantProjectId")]
    public string? TenantProjectId { get; init; }

    /// <summary>
    /// Cloud Storage bucket used for uploading Analytics records.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsBucket")]
    public string? AnalyticsBucket { get; init; }

    /// <summary>
    /// Name of the resource in the following format: <c>organizations/{org}/runtimeConfig</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Cloud Storage bucket used for uploading Trace records.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceBucket")]
    public string? TraceBucket { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
