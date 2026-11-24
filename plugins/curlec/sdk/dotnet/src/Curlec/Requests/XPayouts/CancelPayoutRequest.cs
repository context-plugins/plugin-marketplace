namespace Curlec.Requests.XPayouts;

/// <summary>
/// The inputs of the CancelPayout operation.
/// </summary>
public sealed record CancelPayoutRequest
{
    /// <summary>
    /// Unique identifier of the payout to cancel.
    /// </summary>
    public required string PayoutId { get; init; }
}
