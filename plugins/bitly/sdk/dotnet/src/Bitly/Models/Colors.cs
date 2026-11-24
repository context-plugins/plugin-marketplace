using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// An object of named colors denoting which color should go to which area of the frame
/// </summary>
public record Colors
{
    /// <summary>
    /// The primary color of the frame in hex code format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary")]
    public string? Primary { get; init; }

    /// <summary>
    /// The secondary color of the frame in hex code format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondary")]
    public string? Secondary { get; init; }

    /// <summary>
    /// The background color of the frame in hex code format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("background")]
    public string? Background { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
