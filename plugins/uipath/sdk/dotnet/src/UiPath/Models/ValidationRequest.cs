using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for validating document processing results
/// </summary>
public record ValidationRequest
{
    /// <summary>
    /// Document ID of the document whose results are to be validated
    /// </summary>
    [JsonPropertyName("documentId")]
    public required string DocumentId { get; init; }

    /// <summary>
    /// Classification result for a specific document or page range
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classificationResult")]
    public ClassificationResultItem? ClassificationResult { get; init; }

    /// <summary>
    /// Structured extraction result containing field values and confidence scores
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractionResult")]
    public ExtractionResultData? ExtractionResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
