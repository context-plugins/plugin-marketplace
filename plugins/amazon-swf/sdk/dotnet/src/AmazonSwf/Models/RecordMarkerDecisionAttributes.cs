using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record RecordMarkerDecisionAttributes
{
    /// <summary>
    /// The name of the marker.
    /// </summary>
    [JsonPropertyName("markerName")]
    public required string MarkerName { get; init; }

    /// <summary>
    /// The details of the marker.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
