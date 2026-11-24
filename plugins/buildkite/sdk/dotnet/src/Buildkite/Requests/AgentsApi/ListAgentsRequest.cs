namespace Buildkite.Requests.AgentsApi;

/// <summary>
/// The inputs of the ListAgents operation.
/// </summary>
public sealed record ListAgentsRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }
}
