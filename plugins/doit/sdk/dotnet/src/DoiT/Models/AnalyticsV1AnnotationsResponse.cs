using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AnalyticsV1AnnotationsResponse
{
    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Total number of annotations in the result set
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annotations")]
    public IReadOnlyList<AnnotationListItem>? Annotations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
