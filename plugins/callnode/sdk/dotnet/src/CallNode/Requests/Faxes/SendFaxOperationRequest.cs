using System;
using CallNode.Models;

namespace CallNode.Requests.Faxes;

/// <summary>
/// The inputs of the SendFax operation.
/// </summary>
public sealed record SendFaxOperationRequest
{
    /// <summary>
    /// A UUID. Replaying the same key returns the original result rather than acting twice.
    /// </summary>
    public Guid? XIdempotencyKey { get; init; }

    public required SendFaxRequest Body { get; init; }
}
