using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Configuration for applying a specific extractor
/// </summary>
public record ExtractorOption
{
    /// <summary>
    /// Unique identifier of the extractor to apply
    /// </summary>
    [JsonPropertyName("extractorId")]
    public required string ExtractorId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
