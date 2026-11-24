namespace Buildkite.Requests.Queues;

/// <summary>
/// The inputs of the ListQueues operation.
/// </summary>
public sealed record ListQueuesRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }

    /// <summary>
    /// Cluster UUID
    /// </summary>
    public required string Cluster { get; init; }
}
