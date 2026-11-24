using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// Result of a document digitization operation
/// </summary>
public record DigitizationResult
{
    /// <summary>
    /// Unique identifier assigned to the digitized document. Use this ID in subsequent classification, extraction, and validation calls. Results are retained for seven days.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentId")]
    public string? DocumentId { get; init; }

    /// <summary>
    /// Outcome of the digitization operation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusUiPathDocumentUnderstandingDigitizationApi? Status { get; init; }

    /// <summary>
    /// Number of pages detected in the document
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageCount")]
    public int? PageCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
