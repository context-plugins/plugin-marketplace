using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.PaymentInstrumentsApi;

/// <summary>
/// The inputs of the UpdatePaymentInstrument operation.
/// </summary>
public sealed record UpdatePaymentInstrumentRequest
{
    /// <summary>
    /// The <c>Payment Instrument</c> ID.
    /// </summary>
    public required string PaymentInstrumentId { get; init; }

    public required PaymentInstrumentsRequest1 Body { get; init; }
}
