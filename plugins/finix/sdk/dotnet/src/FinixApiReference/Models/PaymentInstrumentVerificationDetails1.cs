using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// The payment instruction verification results.
/// </summary>
public record PaymentInstrumentVerificationDetails1
{
    /// <summary>
    /// Indicates whether the <c>Payment Instrument</c> supports pull-from-card, cross-border.  For more details, see <see href="/guides/payouts/card-payouts">Push to Card</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pull_from_card_cross_border")]
    public PullFromCardCrossBorder? PullFromCardCrossBorder { get; init; }

    /// <summary>
    /// Indicates whether the <c>Payment Instrument</c> supports pull-from-card, domestically.  For more details, see <see href="/guides/payouts/card-payouts">Push to Card</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pull_from_card_domestic")]
    public PullFromCardDomestic? PullFromCardDomestic { get; init; }

    /// <summary>
    /// Indicates whether the <c>Payment Instrument</c> supports push-to-card, domestically. For more details, see <see href="/guides/payouts/card-payouts">Push to Card</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("push_to_card_domestic")]
    public PushToCardDomestic? PushToCardDomestic { get; init; }

    /// <summary>
    /// Indicates whether the <c>Payment Instrument</c> supports push-to-card, cross-border. For more details, see <see href="/guides/payouts/card-payouts">Push to Card</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("push_to_card_cross_border")]
    public PushToCardCrossBorder? PushToCardCrossBorder { get; init; }

    /// <summary>
    /// A code that indicates whether the card is credit, debit, or prepaid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_type")]
    public CardType1? CardType { get; init; }

    /// <summary>
    /// The currency in which the payment instrument's holder is billed or charged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_currency")]
    public string? BillingCurrency { get; init; }

    /// <summary>
    /// The country where the entity (bank or financial institution) that issued the payment instrument (e.g., credit card, debit card) is located.
    /// <list type="bullet">
    ///   <item><description><c>NON_USA</c> - The card was issued outside of the United States.</description></item>
    ///   <item><description><c>USA</c> - The card was issued in the United States.</description></item>
    ///   <item><description><c>UNKNOWN</c> - The processor did not return an issuer country for this particular BIN.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuer_country")]
    public IssuerCountry1? IssuerCountry { get; init; }

    /// <summary>
    /// Details the results of verifying the cardholder's name with the issuing bank. Only returned for <c>PAYMENT_CARD</c> type verifications on <c>FINIX_V1</c> and <c>VISA_V1</c> processors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name_verification_results")]
    public NameVerificationResults2? NameVerificationResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
