using Curlec.Models;

namespace Curlec.Requests.Transfers;

/// <summary>
/// The inputs of the CreateDirectTransfer operation.
/// </summary>
public sealed record CreateDirectTransferRequest
{
    /// <summary>
    /// Idempotency key for direct transfers. If provided, retrying with the same key within 24 hours returns the original transfer instead of creating a duplicate.
    /// </summary>
    public string? XTransferIdempotency { get; init; }

    public required TransfersRequest Body { get; init; }
}
