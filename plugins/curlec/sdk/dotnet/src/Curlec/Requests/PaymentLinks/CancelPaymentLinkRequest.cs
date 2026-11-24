namespace Curlec.Requests.PaymentLinks;

/// <summary>
/// The inputs of the CancelPaymentLink operation.
/// </summary>
public sealed record CancelPaymentLinkRequest
{
    /// <summary>
    /// Payment Link ID (plink_*).
    /// </summary>
    public required string Id { get; init; }
}
