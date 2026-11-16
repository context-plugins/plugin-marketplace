using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// The authentication values the card network returns. Pass this object, or the ID of this <c>3D Secure Session</c>, when you create the <see href="/api/transfers">Transfer</see> or <see href="/api/authorizations">Authorization</see>.
/// <para>
/// This field is <c>null</c> until the authentication process finishes. It stays <c>null</c> when <c>state</c> is <c>FAILED</c>.
/// </para>
/// </summary>
public record DSecureAuthentication23
{
    /// <summary>
    /// Provides evidence that the cardholder authentication occurred or that the <see href="/api/merchants">Merchant</see> attempted authentication. This is unique for each authentication transaction and is sometimes referred to as the cardholder authentication verification value (CAVV).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cardholder_authentication")]
    public string? CardholderAuthentication { get; init; }

    /// <summary>
    /// The result of the authentication, and the value that determines who carries chargeback liability for fraud.
    /// <list type="bullet">
    ///   <item><description><c>AUTHENTICATED</c>: The issuer authenticated the <see href="/api/identities">buyer</see>. Liability for fraud chargebacks shifts to the issuer.</description></item>
    ///   <item><description><c>ATTEMPTED</c>: The issuer could not authenticate the buyer, so the card network authenticated on the issuer's behalf. Liability for fraud chargebacks shifts to the issuer.</description></item>
    ///   <item><description><c>NON_AUTHENTICATED</c>: The buyer was not authenticated. Liability for fraud chargebacks stays with the seller.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("electronic_commerce_indicator")]
    public ElectronicCommerceIndicator? ElectronicCommerceIndicator { get; init; }

    /// <summary>
    /// The ID the issuer assigns to the 3D Secure transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transaction_id")]
    [MaxLength(36)]
    public string? TransactionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
