using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BatchDeleteCustomVocabularyItemRequest
{
    /// <summary>
    /// The identifier of the bot associated with this custom vocabulary.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The identifier of the version of the bot associated with this custom vocabulary.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported Languages .
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// A list of custom vocabulary items requested to be deleted. Each entry must contain the unique custom vocabulary entry identifier.
    /// </summary>
    [JsonPropertyName("customVocabularyItemList")]
    public required IReadOnlyList<CustomVocabularyEntryId> CustomVocabularyItemList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
