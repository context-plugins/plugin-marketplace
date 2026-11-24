using Paid.Models;

namespace Paid.Requests.Agents;

/// <summary>
/// The inputs of the UpdateByExternalId operation.
/// </summary>
public sealed record UpdateByExternalIdRequest
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public AgentUpdate? Body { get; init; }
}
