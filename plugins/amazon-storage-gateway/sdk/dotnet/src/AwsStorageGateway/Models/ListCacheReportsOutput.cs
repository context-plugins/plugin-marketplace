using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ListCacheReportsOutput
{
    /// <summary>
    /// A list of existing cache reports for all file shares associated with your Amazon Web Services account. This list includes all information provided by the DescribeCacheReport action, such as report status, completion progress, start time, end time, filters, and tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheReportList")]
    public IReadOnlyList<CacheReportInfo>? CacheReportList { get; init; }

    /// <summary>
    /// If the request includes Marker, the response returns that value in this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Marker")]
    public string? Marker { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
