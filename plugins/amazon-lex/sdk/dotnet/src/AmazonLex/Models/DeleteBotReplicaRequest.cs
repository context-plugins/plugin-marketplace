using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteBotReplicaRequest
{
    /// <summary>
    /// The unique ID of the replicated bot to be deleted from the secondary region
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The secondary region of the replicated bot that will be deleted.
    /// </summary>
    [JsonPropertyName("replicaRegion")]
    public required string ReplicaRegion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
