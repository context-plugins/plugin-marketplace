using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Request body for creating a label.
/// </summary>
public record CreateLabelRequest
{
    /// <summary>
    /// The name of the label.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The color of the label.
    /// </summary>
    [JsonPropertyName("color")]
    public required Color Color { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
