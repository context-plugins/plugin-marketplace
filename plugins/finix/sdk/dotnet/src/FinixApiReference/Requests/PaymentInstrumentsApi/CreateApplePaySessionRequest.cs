using FinixApiReference.Models;

namespace FinixApiReference.Requests.PaymentInstrumentsApi;

/// <summary>
/// The inputs of the CreateApplePaySession operation.
/// </summary>
public sealed record CreateApplePaySessionRequest
{
    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required PaymentInstrumentApplePaySession Body { get; init; }
}
