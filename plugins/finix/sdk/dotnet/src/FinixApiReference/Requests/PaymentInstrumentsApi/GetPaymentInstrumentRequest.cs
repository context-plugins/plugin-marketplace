namespace FinixApiReference.Requests.PaymentInstrumentsApi;

/// <summary>
/// The inputs of the GetPaymentInstrument operation.
/// </summary>
public sealed record GetPaymentInstrumentRequest
{
    /// <summary>
    /// The <c>Payment Instrument</c> ID.
    /// </summary>
    public required string PaymentInstrumentId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
