namespace Airwallex.Requests.PaymentIntents;

/// <summary>
/// The inputs of the CapturePaymentIntent operation.
/// </summary>
public sealed record CapturePaymentIntentRequest
{
    public required string Id { get; init; }
}
