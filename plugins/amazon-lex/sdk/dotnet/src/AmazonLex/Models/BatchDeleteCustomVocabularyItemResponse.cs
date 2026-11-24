using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BatchDeleteCustomVocabularyItemResponse
{
    /// <summary>
    /// The identifier of the bot associated with this custom vocabulary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The identifier of the version of the bot associated with this custom vocabulary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// A list of custom vocabulary items that failed to delete during the operation. The reason for the error is contained within each error object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<FailedCustomVocabularyItem>? Errors { get; init; }

    /// <summary>
    /// A list of custom vocabulary items that were successfully deleted during the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resources")]
    public IReadOnlyList<CustomVocabularyItem>? Resources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
