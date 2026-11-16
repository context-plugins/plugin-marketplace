using FinixApiReference.Models;

namespace FinixApiReference.Requests.TransfersApi;

/// <summary>
/// The inputs of the UpdateTransfer operation.
/// </summary>
public sealed record UpdateTransferRequest
{
    /// <summary>
    /// The ID of the <c>Transfer</c> resource.
    /// </summary>
    public required string TransferId { get; init; }

    public required UpdateTransfer Body { get; init; }
}
