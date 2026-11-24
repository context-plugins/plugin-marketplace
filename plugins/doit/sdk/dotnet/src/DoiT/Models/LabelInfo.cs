using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Metadata for a label.
/// </summary>
public record LabelInfo
{
    /// <summary>
    /// The unique identifier of the label.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the label.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
