using Paid.Models;

namespace Paid.Requests.Agents;

/// <summary>
/// The inputs of the Update operation.
/// </summary>
public sealed record UpdateRequest
{
    public required string AgentId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public AgentUpdate? Body { get; init; }
}
