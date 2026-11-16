using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record AddressVerification
{
    [JsonPropertyName("address")]
    public required Address Address { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c>.
    /// </summary>
    [JsonPropertyName("merchant")]
    public required string Merchant { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <b>true</b> to verify the cardholder's address with the card issuer.</description></item>
    ///   <item><description>When set to <b>true</b>, <c>merchant</c> must also be included with your request.</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("verify_payment_card")]
    public required bool VerifyPaymentCard { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
