using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Aggregate star rating — present for local businesses
/// </summary>
public record Rating2
{
    /// <summary>
    /// Star rating value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public string? Rating { get; init; }

    /// <summary>
    /// Number of reviews
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public string? Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
