using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotLocaleFilter
{
    /// <summary>
    /// The name of the field to filter the list of bots.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; } = "BotLocaleName";

    /// <summary>
    /// The value to use for filtering the list of bots.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<string> Values { get; init; }

    /// <summary>
    /// The operator to use for the filter. Specify EQ when the ListBotLocales operation should return only aliases that equal the specified value. Specify CO when the ListBotLocales operation should return aliases that contain the specified value.
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator7 Operator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
