using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotReplicas operation.
/// </summary>
public sealed record ListBotReplicasOperationRequest
{
    public required string BotId { get; init; }

    public ListBotReplicasRequest? Body { get; init; }
}
