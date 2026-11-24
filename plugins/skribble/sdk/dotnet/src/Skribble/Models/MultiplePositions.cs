using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Use multiple explicit positions.
/// </summary>
public record MultiplePositions
{
    [JsonPropertyName("positions")]
    public required IReadOnlyList<VisualSignaturePosition> Positions { get; init; }

    /// <summary>
    /// Visual signature image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public VisualSignatureImage? Image { get; init; }

    /// <summary>
    /// Must not be provided when positions are used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public object? Position { get; init; }

    /// <summary>
    /// Must not be provided when positions are used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("form_field")]
    public object? FormField { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
