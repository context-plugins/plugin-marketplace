namespace Airwallex.Requests.PaymentIntents;

/// <summary>
/// The inputs of the CancelPaymentIntent operation.
/// </summary>
public sealed record CancelPaymentIntentRequest
{
    public required string Id { get; init; }
}
