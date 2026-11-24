using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The SearchResources method's request.
/// </summary>
public record GoogleCloudApihubV1SearchResourcesRequest
{
    /// <summary>
    /// Optional. The maximum number of search results to return. The service may return fewer than this value. If unspecified at most 10 search results will be returned. If value is negative then <c>INVALID_ARGUMENT</c> error is returned. The maximum value is 25; values above 25 will be coerced to 25. While paginating, you can specify a new page size parameter for each page of search results to be listed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageSize")]
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous SearchResources call. Specify this parameter to retrieve the next page of transactions. When paginating, you must specify the <c>page_token</c> parameter and all the other parameters except page_size should be specified with the same value which was used in the previous call. If the other fields are set with a different value than the previous call then <c>INVALID_ARGUMENT</c> error is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Optional. An expression that filters the list of search results. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be <c>=</c>. Filters are not case sensitive. The following field names are eligible for filtering: * <c>resource_type</c> - The type of resource in the search results. Must be one of the following: <c>Api</c>, <c>ApiOperation</c>, <c>Deployment</c>, <c>Definition</c>, <c>Spec</c> or <c>Version</c>. This field can only be specified once in the filter. Here are is an example: * <c>resource_type = Api</c> - The resource_type is _Api_.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public string? Filter { get; init; }

    /// <summary>
    /// Required. The free text search query. This query can contain keywords which could be related to any detail of the API-Hub resources such display names, descriptions, attributes etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public string? Query { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
