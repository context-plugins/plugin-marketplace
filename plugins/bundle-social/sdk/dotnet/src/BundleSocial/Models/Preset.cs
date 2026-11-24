using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Preset
{
    /// <summary>
    /// Value to pass as data.FACEBOOK.textFormatPresetId when creating a post.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Name of the background, for showing in a picker.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// Whether the background is a flat color, a gradient, or an illustration.
    /// </summary>
    [JsonPropertyName("kind")]
    public required Kind Kind { get; init; }

    /// <summary>
    /// CSS color or gradient the background renders. Absent for illustrations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
