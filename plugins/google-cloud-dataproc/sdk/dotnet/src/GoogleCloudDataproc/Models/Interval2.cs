using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Time interval in which diagnosis should be carried out on the cluster.
/// </summary>
public record Interval2
{
    /// <summary>
    /// Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
