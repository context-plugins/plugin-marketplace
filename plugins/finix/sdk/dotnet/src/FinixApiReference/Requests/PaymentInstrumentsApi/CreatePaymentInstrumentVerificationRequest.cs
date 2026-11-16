using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.PaymentInstrumentsApi;

/// <summary>
/// The inputs of the CreatePaymentInstrumentVerification operation.
/// </summary>
public sealed record CreatePaymentInstrumentVerificationRequest
{
    /// <summary>
    /// The ID of the <c>Payment Instrument</c> you wish to verify.
    /// </summary>
    public required string PaymentInstrumentIdVerify { get; init; }

    public required PaymentInstrumentsRequest2 Body { get; init; }
}
