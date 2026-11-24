using Upstox.Models;

namespace Upstox.Requests.Payments;

/// <summary>
/// The inputs of the ModifyPayout operation.
/// </summary>
public sealed record ModifyPayoutOperationRequest
{
    /// <summary>
    /// Payout transaction id
    /// </summary>
    public required string TransactionId { get; init; }

    public required ModifyPayoutRequest Body { get; init; }
}
