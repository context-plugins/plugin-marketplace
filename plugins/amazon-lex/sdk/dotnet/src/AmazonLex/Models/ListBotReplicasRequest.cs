using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotReplicasRequest
{
    /// <summary>
    /// The request for the unique bot IDs in the list of replicated bots.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
