using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record NewCustomVocabularyItem
{
    /// <summary>
    /// The unique phrase for the new custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonPropertyName("phrase")]
    public required string Phrase { get; init; }

    /// <summary>
    /// The weight assigned to the new custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("weight")]
    public int? Weight { get; init; }

    /// <summary>
    /// The display as value assigned to the new custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayAs")]
    public string? DisplayAs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
