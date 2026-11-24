using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AnalyticsUtteranceAttribute
{
    /// <summary>
    /// An attribute to return. The only available attribute is the intent that the bot mapped the utterance to.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; } = "LastUsedIntent";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
