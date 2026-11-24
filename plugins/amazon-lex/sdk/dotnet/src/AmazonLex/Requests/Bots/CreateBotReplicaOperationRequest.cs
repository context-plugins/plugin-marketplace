using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the CreateBotReplica operation.
/// </summary>
public sealed record CreateBotReplicaOperationRequest
{
    public required string BotId { get; init; }

    public CreateBotReplicaRequest? Body { get; init; }
}
