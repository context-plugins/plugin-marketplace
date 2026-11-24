using System.Text.Json.Serialization;
using Archbee.Core.Models;
using Archbee.Models.Enums;

namespace Archbee.Models;

public record DisplayRules
{
    /// <summary>
    /// Unique identifier for the display rule
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Human-readable title for the display rule
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Logical operator to combine multiple rules
    /// </summary>
    [JsonPropertyName("combinator")]
    public required Combinator Combinator { get; init; }

    /// <summary>
    /// Array of individual rules that define the conditions
    /// </summary>
    [JsonPropertyName("rules")]
    public required Rules Rules { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
