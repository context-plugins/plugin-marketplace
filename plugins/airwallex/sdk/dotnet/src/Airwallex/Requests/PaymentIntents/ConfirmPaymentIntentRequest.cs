namespace Airwallex.Requests.PaymentIntents;

/// <summary>
/// The inputs of the ConfirmPaymentIntent operation.
/// </summary>
public sealed record ConfirmPaymentIntentRequest
{
    public required string Id { get; init; }
}
