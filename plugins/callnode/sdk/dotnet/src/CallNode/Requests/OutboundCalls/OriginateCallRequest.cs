using System;
using CallNode.Models;

namespace CallNode.Requests.OutboundCalls;

/// <summary>
/// The inputs of the OriginateCall operation.
/// </summary>
public sealed record OriginateCallRequest
{
    /// <summary>
    /// A UUID. Replaying the same key returns the original result rather than acting twice.
    /// </summary>
    public Guid? XIdempotencyKey { get; init; }

    public required OriginateRequest Body { get; init; }
}
