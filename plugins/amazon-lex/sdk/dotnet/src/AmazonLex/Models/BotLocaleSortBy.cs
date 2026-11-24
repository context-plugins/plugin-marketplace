using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotLocaleSortBy
{
    /// <summary>
    /// The bot locale attribute to sort by.
    /// </summary>
    [JsonPropertyName("attribute")]
    public string Attribute { get; } = "BotLocaleName";

    /// <summary>
    /// Specifies whether to sort the bot locales in ascending or descending order.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order6 Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
