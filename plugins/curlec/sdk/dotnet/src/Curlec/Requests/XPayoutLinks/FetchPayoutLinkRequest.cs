namespace Curlec.Requests.XPayoutLinks;

/// <summary>
/// The inputs of the FetchPayoutLink operation.
/// </summary>
public sealed record FetchPayoutLinkRequest
{
    /// <summary>
    /// Unique identifier of the payout link (e.g. <c>poutlk_00000000000001</c>).
    /// </summary>
    public required string PayoutLinkId { get; init; }
}
