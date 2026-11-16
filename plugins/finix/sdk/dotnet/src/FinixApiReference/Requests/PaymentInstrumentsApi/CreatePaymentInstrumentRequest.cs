using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.PaymentInstrumentsApi;

/// <summary>
/// The inputs of the CreatePaymentInstrument operation.
/// </summary>
public sealed record CreatePaymentInstrumentRequest
{
    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required PaymentInstrumentsRequest Body { get; init; }
}
