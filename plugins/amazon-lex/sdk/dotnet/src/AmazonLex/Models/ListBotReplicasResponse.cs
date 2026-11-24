using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotReplicasResponse
{
    /// <summary>
    /// the unique bot IDs in the list of replicated bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The source region of the source bots in the list of replicated bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceRegion")]
    public string? SourceRegion { get; init; }

    /// <summary>
    /// The summary details for the replicated bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botReplicaSummaries")]
    public IReadOnlyList<BotReplicaSummary>? BotReplicaSummaries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
