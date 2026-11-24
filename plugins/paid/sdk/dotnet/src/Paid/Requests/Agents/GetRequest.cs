namespace Paid.Requests.Agents;

/// <summary>
/// The inputs of the Get operation.
/// </summary>
public sealed record GetRequest
{
    public required string AgentId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
