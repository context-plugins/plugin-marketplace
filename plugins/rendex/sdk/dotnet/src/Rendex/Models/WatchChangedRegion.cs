using System.Text.Json.Serialization;
using Rendex.Core.Models;

namespace Rendex.Models;

/// <summary>
/// Normalized (0..1) union bounding box of all changed regions on the page — the "where" of a visual change. Multiply by the capture's dimensions to get pixels; use it to crop or annotate in your own tooling.
/// </summary>
public record WatchChangedRegion
{
    /// <summary>
    /// Left edge as a fraction of page width (0..1).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x")]
    public double? X { get; init; }

    /// <summary>
    /// Top edge as a fraction of page height (0..1).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("y")]
    public double? Y { get; init; }

    /// <summary>
    /// Width as a fraction of page width (0..1).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    public double? Width { get; init; }

    /// <summary>
    /// Height as a fraction of page height (0..1).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    public double? Height { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
