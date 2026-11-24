using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Structured extraction result containing field values and confidence scores
/// </summary>
public record ExtractionResultData
{
    /// <summary>
    /// Version of the extraction results format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResultsVersion")]
    public int? ResultsVersion { get; init; }

    /// <summary>
    /// Document identifier of the extracted document
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentId")]
    public string? DocumentId { get; init; }

    /// <summary>
    /// List of extracted field values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Fields")]
    public IReadOnlyList<ExtractedField>? Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
