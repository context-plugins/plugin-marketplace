namespace CallNode.Requests.SipTrunks;

/// <summary>
/// The inputs of the DeleteSipTrunk operation.
/// </summary>
public sealed record DeleteSipTrunkRequest
{
    /// <summary>
    /// The trunk's <c>id</c>.
    /// </summary>
    public required string Id { get; init; }
}
