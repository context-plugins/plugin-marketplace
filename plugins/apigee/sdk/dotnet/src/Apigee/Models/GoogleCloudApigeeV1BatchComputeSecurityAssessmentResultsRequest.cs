using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for BatchComputeSecurityAssessmentResults.
/// </summary>
public record GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest
{
    /// <summary>
    /// Include all resources under the scope.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeAllResources")]
    public object? IncludeAllResources { get; init; }

    /// <summary>
    /// Required. Name of the profile that is used for computation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile")]
    public string? Profile { get; init; }

    /// <summary>
    /// Optional. Scope of the resources for the computation. When computing scores for Apigee proxies, the scope should be set to the environment of the resources. When computing scores for API Hub deployments, api_hub_scope should be set instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public string? Scope { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>BatchComputeSecurityAssessmentResults</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// An array of API Hub APIs to assess. A maximum of 1 API can be assessed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiHubApis")]
    public GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2? ApiHubApis { get; init; }

    /// <summary>
    /// Optional. The maximum number of results to return. The service may return fewer than this value. If unspecified, at most 50 results will be returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageSize")]
    public int? PageSize { get; init; }

    /// <summary>
    /// Include only these resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1? Include { get; init; }

    /// <summary>
    /// An array of API Hub Gateways to assess. A maximum of 3 gateways can be assessed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiHubGateways")]
    public GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2? ApiHubGateways { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
