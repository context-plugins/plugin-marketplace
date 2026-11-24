namespace Buildkite.Requests.AgentsApi;

/// <summary>
/// The inputs of the StopAgent operation.
/// </summary>
public sealed record StopAgentRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }

    /// <summary>
    /// Agent UUID
    /// </summary>
    public required string Id { get; init; }
}
