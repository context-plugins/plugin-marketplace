using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeBotRequest
{
    /// <summary>
    /// The unique identifier of the bot to describe.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
