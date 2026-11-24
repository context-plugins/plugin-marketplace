using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Configuration for applying a specific classifier
/// </summary>
public record ClassifierOption
{
    /// <summary>
    /// Unique identifier of the classifier to apply
    /// </summary>
    [JsonPropertyName("classifierId")]
    public required string ClassifierId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
