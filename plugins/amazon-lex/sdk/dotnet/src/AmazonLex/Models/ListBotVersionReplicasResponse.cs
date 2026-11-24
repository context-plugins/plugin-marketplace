using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotVersionReplicasResponse
{
    /// <summary>
    /// The unique ID of the bots in the list of replicated bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The source region used for the bots in the list of replicated bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceRegion")]
    public string? SourceRegion { get; init; }

    /// <summary>
    /// The region used for the replicated bots in the list of replicated bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replicaRegion")]
    public string? ReplicaRegion { get; init; }

    /// <summary>
    /// The information summary used for the replicated bots in the list of replicated bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersionReplicaSummaries")]
    public IReadOnlyList<BotVersionReplicaSummary>? BotVersionReplicaSummaries { get; init; }

    /// <summary>
    /// The next token used for the replicated bots in the list of replicated bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
