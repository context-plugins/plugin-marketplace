using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Additional underwriting data about the user.
/// </summary>
public record AdditionalUnderwritingData1
{
    /// <summary>
    /// The approximate annual ACH sales expected to be processed (in cents) by this merchant (max 10 characters).
    /// </summary>
    [JsonPropertyName("annual_ach_volume")]
    public required int AnnualAchVolume { get; init; }

    /// <summary>
    /// The approximate average ACH sale amount (in cents) for this merchant.
    /// </summary>
    [JsonPropertyName("average_ach_transfer_amount")]
    public required int AverageAchTransferAmount { get; init; }

    /// <summary>
    /// The average credit card sale amount (in cents) for this merchant.
    /// </summary>
    [JsonPropertyName("average_card_transfer_amount")]
    public required int AverageCardTransferAmount { get; init; }

    /// <summary>
    /// Description of this merchant's business (max 200 characters).
    /// </summary>
    [JsonPropertyName("business_description")]
    [MinLength(1)]
    public required string BusinessDescription { get; init; }

    /// <summary>
    /// The distribution of the merchant's credit card volume The sum of <c>card_volume_distribution</c> must be 100.
    /// </summary>
    [JsonPropertyName("card_volume_distribution")]
    public required CardVolumeDistribution? CardVolumeDistribution { get; init; }

    /// <summary>
    /// Sets if this merchant has consented and accepted to a credit check.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_check_allowed")]
    public bool? CreditCheckAllowed { get; init; }

    /// <summary>
    /// The IP address of the merchant when they consented to a credit check (e.g., 42.1.1.112 ).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_check_ip_address")]
    [MinLength(1)]
    public string? CreditCheckIpAddress { get; init; }

    /// <summary>
    /// A timestamp of when this merchant consented to a credit check (e.g., 2021-04-28T16:42:55Z).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_check_timestamp")]
    [MinLength(1)]
    public string? CreditCheckTimestamp { get; init; }

    /// <summary>
    /// The details of the browser that was used when this merchant consented to a credit check (e.g., Mozilla 5.0 (Macintosh; Intel Mac OS X 10 _14_6)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_check_user_agent")]
    [MinLength(1)]
    public string? CreditCheckUserAgent { get; init; }

    /// <summary>
    /// Sets whether this merchant has accepted the terms and conditions of the merchant agreement. Required.
    /// </summary>
    [JsonPropertyName("merchant_agreement_accepted")]
    public required bool MerchantAgreementAccepted { get; init; }

    /// <summary>
    /// IP address of the merchant when this merchant accepted the merchant agreement (e.g., 42.1.1.113). Required.
    /// </summary>
    [JsonPropertyName("merchant_agreement_ip_address")]
    [MinLength(1)]
    public required string MerchantAgreementIpAddress { get; init; }

    /// <summary>
    /// Timestamp of when the merchant accepted Finix's Terms of Service (e.g., 2021-04-28T16:42:55Z). Required.
    /// </summary>
    [JsonPropertyName("merchant_agreement_timestamp")]
    [MinLength(1)]
    public required string MerchantAgreementTimestamp { get; init; }

    /// <summary>
    /// The details of the browser that was used when this merchant accepted Finix's Terms of Service (e.g., Mozilla 5.0 (Macintosh; Intel Mac OS X 10 _14_6)). Required.
    /// </summary>
    [JsonPropertyName("merchant_agreement_user_agent")]
    [MinLength(1)]
    public required string MerchantAgreementUserAgent { get; init; }

    /// <summary>
    /// Include the value that best applies to the merchant's refund policy.
    /// </summary>
    [JsonPropertyName("refund_policy")]
    public required RefundPolicy RefundPolicy { get; init; }

    /// <summary>
    /// Merchant's distribution of credit card volume by business type. Sum of <c>volume_distribution_by_business_type</c> must be 100.
    /// </summary>
    [JsonPropertyName("volume_distribution_by_business_type")]
    public required VolumeDistributionByBusinessType? VolumeDistributionByBusinessType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
