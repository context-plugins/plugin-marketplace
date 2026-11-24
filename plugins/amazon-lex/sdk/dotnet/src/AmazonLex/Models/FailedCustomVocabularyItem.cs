using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record FailedCustomVocabularyItem
{
    /// <summary>
    /// The unique item identifer for the failed custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemId")]
    public string? ItemId { get; init; }

    /// <summary>
    /// The error message for the failed custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorMessage")]
    public string? ErrorMessage { get; init; }

    /// <summary>
    /// The unique error code for the failed custom vocabulary item from the custom vocabulary list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorCode")]
    public ErrorCode? ErrorCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
