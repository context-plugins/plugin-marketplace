using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record ThingsToKnow
{
    /// <summary>
    /// Topic cluster label
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    /// <summary>
    /// Subtitle or supporting text for the topic
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtitle")]
    public string? Subtitle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
