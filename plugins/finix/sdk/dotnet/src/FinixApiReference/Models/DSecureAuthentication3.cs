using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record DSecureAuthentication3
{
    /// <summary>
    /// Provides evidence that the cardholder authentication occurred or that the merchant attempted authentication. This is unique for each authentication transaction and is sometimes referred to as the cardholder authentication verification value (CAVV).
    /// </summary>
    [JsonPropertyName("cardholder_authentication")]
    public required string CardholderAuthentication { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description><b>AUTHENTICATED</b>: Approved by 3D Secure Vendor.</description></item>
    ///   <item><description><b>ATTEMPTED</b>: Issuer or cardholder does not support 3D Secure.</description></item>
    ///   <item><description><b>NON_AUTHENTICATED</b>: Did not pass in 3D Secure Data or passed in incorrect data when attempting 3D Secure.</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("electronic_commerce_indicator")]
    public required string ElectronicCommerceIndicator { get; init; }

    /// <summary>
    /// Unique identifier for the 3D Secure transaction.
    /// </summary>
    [JsonPropertyName("transaction_id")]
    [MaxLength(36)]
    public required string TransactionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
