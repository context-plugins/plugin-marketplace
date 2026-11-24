using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. Time range for the stats.
/// </summary>
public record GoogleTypeInterval2
{
    /// <summary>
    /// Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
