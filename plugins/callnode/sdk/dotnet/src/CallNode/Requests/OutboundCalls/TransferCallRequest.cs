using CallNode.Models;

namespace CallNode.Requests.OutboundCalls;

/// <summary>
/// The inputs of the TransferCall operation.
/// </summary>
public sealed record TransferCallRequest
{
    /// <summary>
    /// The <b>caller's</b> channel id — the <c>callId</c> CallNode sends you in the
    /// webhook/stream query string for that call. On a bridged call this is
    /// the A-leg, not the leg your own endpoint sees.
    /// </summary>
    public required string CallId { get; init; }

    public required ApiV1CallsTransferRequest Body { get; init; }
}
