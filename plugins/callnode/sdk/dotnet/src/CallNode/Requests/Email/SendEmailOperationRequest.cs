using System;
using CallNode.Models;

namespace CallNode.Requests.Email;

/// <summary>
/// The inputs of the SendEmail operation.
/// </summary>
public sealed record SendEmailOperationRequest
{
    /// <summary>
    /// A UUID. Replaying the same key returns the original result rather than acting twice.
    /// </summary>
    public Guid? XIdempotencyKey { get; init; }

    public required SendEmailRequest Body { get; init; }
}
