using Curlec.Models;

namespace Curlec.Requests.PaymentLinks;

/// <summary>
/// The inputs of the CreatePaymentLink operation.
/// </summary>
public sealed record CreatePaymentLinkRequest
{
    public required PaymentLinksRequest Body { get; init; }
}
