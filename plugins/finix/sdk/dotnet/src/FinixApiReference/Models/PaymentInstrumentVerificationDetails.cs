using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// This object is not applicable to merchant verification.
/// </summary>
public record PaymentInstrumentVerificationDetails
{
    /// <summary>
    /// This object is not applicable to merchant verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pull_from_card_cross_border")]
    public string? PullFromCardCrossBorder { get; init; }

    /// <summary>
    /// This object is not applicable to merchant verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pull_from_card_domestic")]
    public string? PullFromCardDomestic { get; init; }

    /// <summary>
    /// This object is not applicable to merchant verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("push_to_card_domestic")]
    public string? PushToCardDomestic { get; init; }

    /// <summary>
    /// This object is not applicable to merchant verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("push_to_card_cross_border")]
    public string? PushToCardCrossBorder { get; init; }

    /// <summary>
    /// This object is not applicable to merchant verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_type")]
    public string? CardType { get; init; }

    /// <summary>
    /// This object is not applicable to merchant verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_currency")]
    public string? BillingCurrency { get; init; }

    /// <summary>
    /// This object is not applicable to merchant verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuer_country")]
    public string? IssuerCountry { get; init; }

    /// <summary>
    /// Details the results of verifying the cardholder's name. Not applicable to merchant verification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name_verification_results")]
    public NameVerificationResults3? NameVerificationResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
