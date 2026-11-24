using CallNode.Models;

namespace CallNode.Requests.SipTrunks;

/// <summary>
/// The inputs of the UpdateSipTrunk operation.
/// </summary>
public sealed record UpdateSipTrunkRequest
{
    /// <summary>
    /// The trunk's <c>id</c>.
    /// </summary>
    public required string Id { get; init; }

    public required UpdateTrunkRequest Body { get; init; }
}
