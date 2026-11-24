using Tabby.Models;

namespace Tabby.Requests.Checkout;

/// <summary>
/// The inputs of the PostCheckoutSession operation.
/// </summary>
public sealed record PostCheckoutSessionRequest
{
    public required ApiV2CheckoutRequest Body { get; init; }
}
