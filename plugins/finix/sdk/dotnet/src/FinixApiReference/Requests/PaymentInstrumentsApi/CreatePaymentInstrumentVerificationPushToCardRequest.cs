using FinixApiReference.Models;

namespace FinixApiReference.Requests.PaymentInstrumentsApi;

/// <summary>
/// The inputs of the CreatePaymentInstrumentVerificationPushToCard operation.
/// </summary>
public sealed record CreatePaymentInstrumentVerificationPushToCardRequest
{
    /// <summary>
    /// The ID of the <c>Payment Instrument</c> you wish to verify.
    /// </summary>
    public required string PaymentInstrumentIdVerify { get; init; }

    public required PushToCardEligibility Body { get; init; }
}
