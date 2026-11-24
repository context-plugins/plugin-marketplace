using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Event types detected in the article.
/// </summary>
public record EventTypeHolder
{
    /// <summary>
    /// Detected event name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Detected event classification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
