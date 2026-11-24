using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CustomVocabularyEntryId
{
    /// <summary>
    /// The unique item identifier for the custom vocabulary items.
    /// </summary>
    [JsonPropertyName("itemId")]
    public required string ItemId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
