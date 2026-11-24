using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// An object describing text with color
/// </summary>
public record Text
{
    /// <summary>
    /// The text to be used
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// The color of the text in hex code format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; } = "#ffffff";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
