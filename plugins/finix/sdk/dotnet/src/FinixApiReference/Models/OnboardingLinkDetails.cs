using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// The information of the initial onboarding link. This is only provided when creating an <c>onboarding_form</c>.
/// </summary>
public record OnboardingLinkDetails
{
    /// <summary>
    /// Duration (in minutes) the link is valid. Sets <c>expires_at</c> in the response. Defaults to 60 minutes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_in_minutes")]
    public int? ExpirationInMinutes { get; init; }

    /// <summary>
    /// The URL users get sent to if the bearer token expires.
    /// </summary>
    [JsonPropertyName("expired_session_url")]
    public required string ExpiredSessionUrl { get; init; }

    /// <summary>
    /// The URL of the page where you display the fees related to processing payments (for more info, see <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-forms/">Onboarding Forms</see>).
    /// </summary>
    [JsonPropertyName("fee_details_url")]
    public required string FeeDetailsUrl { get; init; }

    /// <summary>
    /// The maximum transaction amount for the merchant's card payment processing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_max_transaction_amount")]
    public int? MerchantMaxTransactionAmount { get; init; }

    /// <summary>
    /// The maximum transaction amount for the merchant's ACH payment processing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_ach_max_transaction_amount")]
    public int? MerchantAchMaxTransactionAmount { get; init; }

    /// <summary>
    /// The URL users get sent to after completing the onboarding flow.
    /// </summary>
    [JsonPropertyName("return_url")]
    public required string ReturnUrl { get; init; }

    /// <summary>
    /// Your Terms of Service URL. The URL is provided to users for consent along with Finix's Terms of Service.
    /// </summary>
    [JsonPropertyName("terms_of_service_url")]
    public required string TermsOfServiceUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
