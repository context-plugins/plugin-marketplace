using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record CvvVerification
{
    /// <summary>
    /// <list type="bullet">
    ///   <item><description>The ID of the <c>Merchant</c>.</description></item>
    ///   <item><description>Must be included when <c>verify_payment_card</c> is set to <b>true</b>.</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("merchant")]
    public required string Merchant { get; init; }

    /// <summary>
    /// The 3-or 4-digit security code for the card (i.e., the CVV code). While providing a CVV is optional, it is recommended to include it wherever possible to prevent fraud.
    /// </summary>
    [JsonPropertyName("security_code")]
    public required string? SecurityCode { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <b>true</b> to verify card details with the card issuer.</description></item>
    ///   <item><description>Must be set to <b>true</b> to update the CVV or security code of a card.</description></item>
    ///   <item><description>When set to <b>true</b>, <c>merchant</c> must also be included with your request.</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("verify_payment_card")]
    public required bool VerifyPaymentCard { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
