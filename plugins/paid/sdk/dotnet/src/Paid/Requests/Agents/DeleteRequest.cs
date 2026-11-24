namespace Paid.Requests.Agents;

/// <summary>
/// The inputs of the Delete operation.
/// </summary>
public sealed record DeleteRequest
{
    public required string AgentId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
