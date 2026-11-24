namespace CallNode.Requests.OutboundCalls;

/// <summary>
/// The inputs of the CancelCall operation.
/// </summary>
public sealed record CancelCallRequest
{
    /// <summary>
    /// The <c>callId</c> returned by originate.
    /// </summary>
    public required string CallId { get; init; }
}
