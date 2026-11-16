using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.PaymentInstrumentAssociations;

/// <summary>
/// The inputs of the UpdatePaymentInstrumentAssociation operation.
/// </summary>
public sealed record UpdatePaymentInstrumentAssociationRequest
{
    /// <summary>
    /// The <c>Payment Instrument Fee Association</c> ID.
    /// </summary>
    public required string PaymentInstrumentAssociationId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";

    public required PaymentInstrumentAssociationsRequest Body { get; init; }
}
