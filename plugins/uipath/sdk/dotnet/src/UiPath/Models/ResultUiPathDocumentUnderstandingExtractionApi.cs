using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Extraction output, populated when status is Succeeded
/// </summary>
public record ResultUiPathDocumentUnderstandingExtractionApi
{
    /// <summary>
    /// Document ID from which data was extracted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentId")]
    public string? DocumentId { get; init; }

    /// <summary>
    /// Structured extraction result containing field values and confidence scores
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractionResult")]
    public ExtractionResultData? ExtractionResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
