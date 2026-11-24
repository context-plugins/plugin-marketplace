using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateBotVersionRequest
{
    /// <summary>
    /// The identifier of the bot to create the version for.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// A description of the version. Use the description to help identify the version in lists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
    /// </summary>
    [JsonPropertyName("botVersionLocaleSpecification")]
    public required IReadOnlyDictionary<string, BotVersionLocaleDetails> BotVersionLocaleSpecification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
