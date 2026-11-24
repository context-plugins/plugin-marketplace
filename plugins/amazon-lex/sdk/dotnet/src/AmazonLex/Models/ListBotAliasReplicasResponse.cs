using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotAliasReplicasResponse
{
    /// <summary>
    /// The unique bot ID of the replicated bot created from the source bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The source region of the replicated bot created from the source bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceRegion")]
    public string? SourceRegion { get; init; }

    /// <summary>
    /// The secondary region of the replicated bot created from the source bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replicaRegion")]
    public string? ReplicaRegion { get; init; }

    /// <summary>
    /// The summary information of the replicated bot created from the source bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasReplicaSummaries")]
    public IReadOnlyList<BotAliasReplicaSummary>? BotAliasReplicaSummaries { get; init; }

    /// <summary>
    /// The next token for the replicated bots created from the source bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
