using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Position where the signature should appear.
/// </summary>
public record VisualSignaturePosition1
{
    /// <summary>
    /// Page number (0-indexed) where the signature appears.
    /// This is a String and not a number!
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public string? Page { get; init; }

    /// <summary>
    /// Height of the signature in pixels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    public double? Height { get; init; }

    /// <summary>
    /// Width of the signature in pixels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    public double? Width { get; init; }

    /// <summary>
    /// X-coordinate (pixels from left) of signature.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x")]
    public double? X { get; init; }

    /// <summary>
    /// Y-coordinate (pixels from top) of signature.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("y")]
    public double? Y { get; init; }

    /// <summary>
    /// Defines a rotation of the field content.
    /// If used in context with a form field, then only the values 0, 90, 180, 270 are legal.
    /// Otherwise every value is legal. The rotation is applied counter clockwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rotation")]
    public double? Rotation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
