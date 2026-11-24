using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Use a single explicit position.
/// </summary>
public record SinglePosition
{
    [JsonPropertyName("position")]
    public required VisualSignaturePosition Position { get; init; }

    /// <summary>
    /// Visual signature image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public VisualSignatureImage? Image { get; init; }

    /// <summary>
    /// Must not be provided when position is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("positions")]
    public object? Positions { get; init; }

    /// <summary>
    /// Must not be provided when position is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("form_field")]
    public object? FormField { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
