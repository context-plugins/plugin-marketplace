namespace Curlec.Requests.PaymentLinks;

/// <summary>
/// The inputs of the FetchPaymentLink operation.
/// </summary>
public sealed record FetchPaymentLinkRequest
{
    /// <summary>
    /// Payment Link ID (plink_*).
    /// </summary>
    public required string Id { get; init; }
}
