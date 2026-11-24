using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotAliasReplicas operation.
/// </summary>
public sealed record ListBotAliasReplicasOperationRequest
{
    public required string BotId { get; init; }

    public required string ReplicaRegion { get; init; }

    public ListBotAliasReplicasRequest? Body { get; init; }
}
