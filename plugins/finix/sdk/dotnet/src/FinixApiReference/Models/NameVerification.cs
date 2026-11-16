using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record NameVerification
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
    /// The cardholder name details to verify against the card issuer. Only supported on <c>FINIX_V1</c>.
    /// <para>
    /// {% admonition type="info" %}
    /// When provided, the <c>name</c> field on the <c>Payment Instrument</c> is updated by concatenating <c>first_name</c>, <c>middle_name</c>, and <c>last_name</c>.
    /// {% /admonition %}
    /// </para>
    /// </summary>
    [JsonPropertyName("name_verification_details")]
    public required NameVerificationDetails NameVerificationDetails { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <b>true</b> to verify card details with the card issuer.</description></item>
    ///   <item><description>When set to <b>true</b>, <c>merchant</c> must also be included with your request.</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("verify_payment_card")]
    public required bool VerifyPaymentCard { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
