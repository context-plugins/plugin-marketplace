using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeBotReplicaRequest
{
    /// <summary>
    /// The request for the unique bot ID of the replicated bot being monitored.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The request for the region of the replicated bot being monitored.
    /// </summary>
    [JsonPropertyName("replicaRegion")]
    public required string ReplicaRegion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
