using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotAliasReplicasRequest
{
    /// <summary>
    /// The request for the unique bot ID of the replicated bot created from the source bot alias.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The request for the secondary region of the replicated bot created from the source bot alias.
    /// </summary>
    [JsonPropertyName("replicaRegion")]
    public required string ReplicaRegion { get; init; }

    /// <summary>
    /// The request for maximum results to list the replicated bots created from the source bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// The request for the next token for the replicated bot created from the source bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
