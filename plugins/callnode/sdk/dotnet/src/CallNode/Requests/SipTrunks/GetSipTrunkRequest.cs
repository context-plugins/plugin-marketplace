namespace CallNode.Requests.SipTrunks;

/// <summary>
/// The inputs of the GetSipTrunk operation.
/// </summary>
public sealed record GetSipTrunkRequest
{
    /// <summary>
    /// The trunk's <c>id</c>.
    /// </summary>
    public required string Id { get; init; }
}
