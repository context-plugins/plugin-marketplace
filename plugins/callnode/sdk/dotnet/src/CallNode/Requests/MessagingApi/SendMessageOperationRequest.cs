using System;
using CallNode.Models;

namespace CallNode.Requests.MessagingApi;

/// <summary>
/// The inputs of the SendMessage operation.
/// </summary>
public sealed record SendMessageOperationRequest
{
    /// <summary>
    /// A UUID. Replaying the same key returns the original result rather than acting twice.
    /// </summary>
    public Guid? XIdempotencyKey { get; init; }

    public required SendMessageRequest Body { get; init; }
}
