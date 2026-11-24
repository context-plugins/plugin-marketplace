using System;
using CallNode.Models;

namespace CallNode.Requests.Wholesale;

/// <summary>
/// The inputs of the OrderWholesaleNumber operation.
/// </summary>
public sealed record OrderWholesaleNumberRequest
{
    /// <summary>
    /// A UUID. Replaying the same key returns the original result rather than acting twice.
    /// </summary>
    public Guid? XIdempotencyKey { get; init; }

    public required ApiV1WholesaleNumbersRequest Body { get; init; }
}
