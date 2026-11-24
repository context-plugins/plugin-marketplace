using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The observation window. The server quantizes to day boundaries and caps the span at 90 days.
/// </summary>
public record GoogleTypeInterval1ApigeeProjectsApi
{
    /// <summary>
    /// Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    /// <summary>
    /// Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
