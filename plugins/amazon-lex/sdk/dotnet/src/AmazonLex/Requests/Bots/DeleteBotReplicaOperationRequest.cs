using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBotReplica operation.
/// </summary>
public sealed record DeleteBotReplicaOperationRequest
{
    public required string BotId { get; init; }

    public required string ReplicaRegion { get; init; }

    public DeleteBotReplicaRequest? Body { get; init; }
}
