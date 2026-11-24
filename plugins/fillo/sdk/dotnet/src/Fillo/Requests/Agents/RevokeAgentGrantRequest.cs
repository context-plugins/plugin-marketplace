using Fillo.Models;

namespace Fillo.Requests.Agents;

/// <summary>
/// The inputs of the RevokeAgentGrant operation.
/// </summary>
public sealed record RevokeAgentGrantRequest
{
    /// <summary>
    /// A grant id from the MCP client listing.
    /// </summary>
    public required string Id { get; init; }

    public required ConfirmTarget Body { get; init; }
}
