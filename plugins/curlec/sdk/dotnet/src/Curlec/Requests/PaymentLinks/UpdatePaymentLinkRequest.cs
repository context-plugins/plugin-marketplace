using Curlec.Models;

namespace Curlec.Requests.PaymentLinks;

/// <summary>
/// The inputs of the UpdatePaymentLink operation.
/// </summary>
public sealed record UpdatePaymentLinkRequest
{
    /// <summary>
    /// Payment Link ID (plink_*).
    /// </summary>
    public required string Id { get; init; }

    public required PaymentLinksRequest1 Body { get; init; }
}
