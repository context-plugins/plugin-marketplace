using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for classifying a previously digitized document
/// </summary>
public record ClassificationRequest
{
    /// <summary>
    /// Document ID returned by the digitization endpoint
    /// </summary>
    [JsonPropertyName("documentId")]
    public required string DocumentId { get; init; }

    /// <summary>
    /// Classifiers to apply with their configuration options
    /// </summary>
    [JsonPropertyName("classifiersOptions")]
    public required IReadOnlyList<ClassifierOption> ClassifiersOptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
