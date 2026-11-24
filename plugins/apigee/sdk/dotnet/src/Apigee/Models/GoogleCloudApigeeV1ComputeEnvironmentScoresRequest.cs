using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for ComputeEnvironmentScores.
/// </summary>
public record GoogleCloudApigeeV1ComputeEnvironmentScoresRequest
{
    /// <summary>
    /// Optional. A token that can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Required. Time range for score calculation. At most 14 days of scores will be returned, and both the start and end dates must be within the last 90 days.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeRange")]
    public GoogleTypeInterval1? TimeRange { get; init; }

    /// <summary>
    /// Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageSize")]
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned. Example: [{ "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" }, { "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target", }] This will return components with path: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" OR "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter>? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
