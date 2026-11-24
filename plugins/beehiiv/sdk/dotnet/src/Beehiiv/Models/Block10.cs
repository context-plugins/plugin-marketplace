using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record Block10
{
    /// <summary>
    /// Discriminator value: html
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "html";

    /// <summary>
    /// Optional styling for borders, spacing, colors, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visual_settings")]
    public VisualSettings1? VisualSettings { get; init; }

    /// <summary>
    /// Optional rules for when/where this block is shown, including dynamic content targeting via condition sets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibility_settings")]
    public VisibilitySettings1? VisibilitySettings { get; init; }

    /// <summary>
    /// The raw HTML content. Note that <c>&lt;style&gt;</c> and <c>&lt;link&gt;</c> tags are removed during sanitization — use inline styles for all visual styling.
    /// </summary>
    [JsonPropertyName("html")]
    public required string Html { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
