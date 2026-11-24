namespace Upstox.Requests.Payments;

/// <summary>
/// The inputs of the CancelPayout operation.
/// </summary>
public sealed record CancelPayoutRequest
{
    /// <summary>
    /// Payout transaction id
    /// </summary>
    public required string TransactionId { get; init; }
}
