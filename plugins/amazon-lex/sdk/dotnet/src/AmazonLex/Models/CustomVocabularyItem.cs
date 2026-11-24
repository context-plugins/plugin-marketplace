using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CustomVocabularyItem
{
    /// <summary>
    /// The unique item identifer for the custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonPropertyName("itemId")]
    public required string ItemId { get; init; }

    /// <summary>
    /// The unique phrase for the custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonPropertyName("phrase")]
    public required string Phrase { get; init; }

    /// <summary>
    /// The weight assigned for the custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("weight")]
    public int? Weight { get; init; }

    /// <summary>
    /// The DisplayAs value for the custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayAs")]
    public string? DisplayAs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
