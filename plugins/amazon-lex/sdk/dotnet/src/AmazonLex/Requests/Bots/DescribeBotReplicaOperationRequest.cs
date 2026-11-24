namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeBotReplica operation.
/// </summary>
public sealed record DescribeBotReplicaOperationRequest
{
    public required string BotId { get; init; }

    public required string ReplicaRegion { get; init; }
}
