using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record GeneralLabelsSettings
{
    /// <summary>
    /// The labels that should be included in the return from DetectLabels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelInclusionFilters")]
    public IReadOnlyList<string>? LabelInclusionFilters { get; init; }

    /// <summary>
    /// The labels that should be excluded from the return from DetectLabels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelExclusionFilters")]
    public IReadOnlyList<string>? LabelExclusionFilters { get; init; }

    /// <summary>
    /// The label categories that should be included in the return from DetectLabels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelCategoryInclusionFilters")]
    public IReadOnlyList<string>? LabelCategoryInclusionFilters { get; init; }

    /// <summary>
    /// The label categories that should be excluded from the return from DetectLabels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelCategoryExclusionFilters")]
    public IReadOnlyList<string>? LabelCategoryExclusionFilters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
