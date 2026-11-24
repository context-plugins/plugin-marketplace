using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for extracting data from a previously digitized document
/// </summary>
public record ExtractionRequest
{
    /// <summary>
    /// Document ID returned by the digitization endpoint
    /// </summary>
    [JsonPropertyName("documentId")]
    public required string DocumentId { get; init; }

    /// <summary>
    /// Document type identifier to guide extraction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentTypeId")]
    public string? DocumentTypeId { get; init; }

    /// <summary>
    /// Extractors to apply with their configuration options
    /// </summary>
    [JsonPropertyName("extractorsOptions")]
    public required IReadOnlyList<ExtractorOption> ExtractorsOptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
