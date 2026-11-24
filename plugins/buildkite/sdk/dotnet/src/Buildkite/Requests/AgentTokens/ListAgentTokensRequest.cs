namespace Buildkite.Requests.AgentTokens;

/// <summary>
/// The inputs of the ListAgentTokens operation.
/// </summary>
public sealed record ListAgentTokensRequest
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
