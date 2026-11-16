using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentUpdateCardAddress
{
    [JsonPropertyName("address")]
    public required Address Address { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> the <c>Payment Instrument</c> was created under.
    /// </summary>
    [JsonPropertyName("merchant")]
    public required string Merchant { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <b>true</b> to verify the updated billing address with the card issuer.</description></item>
    ///   <item><description>When set to <b>true</b>, <c>merchant</c> must also be included with your request.</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("verify_payment_card")]
    public bool VerifyPaymentCard { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
