using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentUpdateExpirationDate
{
    /// <summary>
    /// The expiration month of the payment card. Must be between 1 and 12. Both <c>expiration_month</c> and <c>expiration_year</c> must be provided together.
    /// </summary>
    [JsonPropertyName("expiration_month")]
    public required int ExpirationMonth { get; init; }

    /// <summary>
    /// The expiration year of the payment card. Must be a 4-digit year equal to or greater than the current year. Both <c>expiration_month</c> and <c>expiration_year</c> must be provided together.
    /// </summary>
    [JsonPropertyName("expiration_year")]
    public required int ExpirationYear { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
