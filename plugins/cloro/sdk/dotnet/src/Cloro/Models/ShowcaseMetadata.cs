using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Visual showcase metadata attached to a shopping product (image, background, and per-slot placement).
/// </summary>
public record ShowcaseMetadata
{
    /// <summary>
    /// Image rendered as the hero of a product showcase
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public ShowcaseImage? Image { get; init; }

    /// <summary>
    /// Background styling for a product showcase
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("background")]
    public ShowcaseBackground? Background { get; init; }

    /// <summary>
    /// Slot map keyed by slot identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slots")]
    public IReadOnlyDictionary<string, ShowcaseSlot>? Slots { get; init; }

    /// <summary>
    /// Free-form debug metadata; opaque to clients
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debug")]
    public object? Debug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
