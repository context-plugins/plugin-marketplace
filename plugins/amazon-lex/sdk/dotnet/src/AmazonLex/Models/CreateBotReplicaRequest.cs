using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateBotReplicaRequest
{
    /// <summary>
    /// The request for the unique bot ID of the source bot to be replicated in the secondary region.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The request for the secondary region that will be used in the replication of the source bot.
    /// </summary>
    [JsonPropertyName("replicaRegion")]
    public required string ReplicaRegion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
