using Paid.Models;

namespace Paid.Requests.Agents;

/// <summary>
/// The inputs of the Create operation.
/// </summary>
public sealed record CreateRequest
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public AgentCreate? Body { get; init; }
}
