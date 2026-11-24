using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// Result of an asynchronous extraction job
/// </summary>
public record ExtractionResult
{
    /// <summary>
    /// Unique identifier of the extraction job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Current status of the extraction job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1UiPathDocumentUnderstandingExtractionApi? Status { get; init; }

    /// <summary>
    /// Extraction output, populated when status is Succeeded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public ResultUiPathDocumentUnderstandingExtractionApi? Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
