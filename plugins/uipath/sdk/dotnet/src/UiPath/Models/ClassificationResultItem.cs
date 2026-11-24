using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// Classification result for a specific document or page range
/// </summary>
public record ClassificationResultItem
{
    /// <summary>
    /// Identifier of the classifier that produced this result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifierId")]
    public string? ClassifierId { get; init; }

    /// <summary>
    /// Identified document type identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentTypeId")]
    public string? DocumentTypeId { get; init; }

    /// <summary>
    /// Confidence score of the classification result (0.0 to 1.0)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Confidence { get; init; }

    /// <summary>
    /// First page of the classified document section
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startPage")]
    public int? StartPage { get; init; }

    /// <summary>
    /// Last page of the classified document section
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endPage")]
    public int? EndPage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
