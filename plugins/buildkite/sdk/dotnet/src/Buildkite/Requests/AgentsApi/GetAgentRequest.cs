namespace Buildkite.Requests.AgentsApi;

/// <summary>
/// The inputs of the GetAgent operation.
/// </summary>
public sealed record GetAgentRequest
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
