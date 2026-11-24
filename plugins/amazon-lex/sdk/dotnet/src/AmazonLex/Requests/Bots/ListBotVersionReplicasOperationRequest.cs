using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotVersionReplicas operation.
/// </summary>
public sealed record ListBotVersionReplicasOperationRequest
{
    public required string BotId { get; init; }

    public required string ReplicaRegion { get; init; }

    public ListBotVersionReplicasRequest? Body { get; init; }
}
