namespace Airwallex.Requests.PaymentIntents;

/// <summary>
/// The inputs of the GetPaymentIntent operation.
/// </summary>
public sealed record GetPaymentIntentRequest
{
    public required string Id { get; init; }
}
