namespace Curlec.Requests.XPayouts;

/// <summary>
/// The inputs of the FetchPayout operation.
/// </summary>
public sealed record FetchPayoutRequest
{
    /// <summary>
    /// Unique identifier of the payout (e.g. <c>pout_00000000000001</c>).
    /// </summary>
    public required string PayoutId { get; init; }
}
