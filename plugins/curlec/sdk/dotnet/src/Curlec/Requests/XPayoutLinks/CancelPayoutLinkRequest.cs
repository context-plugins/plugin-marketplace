namespace Curlec.Requests.XPayoutLinks;

/// <summary>
/// The inputs of the CancelPayoutLink operation.
/// </summary>
public sealed record CancelPayoutLinkRequest
{
    /// <summary>
    /// Unique identifier of the payout link to cancel.
    /// </summary>
    public required string PayoutLinkId { get; init; }
}
