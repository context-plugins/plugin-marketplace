namespace CallNode.Requests.OutboundCalls;

/// <summary>
/// The inputs of the GetCall operation.
/// </summary>
public sealed record GetCallRequest
{
    /// <summary>
    /// The <c>callId</c> returned by originate.
    /// </summary>
    public required string CallId { get; init; }
}
