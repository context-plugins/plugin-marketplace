using CallNode.Models;

namespace CallNode.Requests.SipTrunks;

/// <summary>
/// The inputs of the CreateSipTrunk operation.
/// </summary>
public sealed record CreateSipTrunkRequest
{
    public required CreateTrunkRequest Body { get; init; }
}
