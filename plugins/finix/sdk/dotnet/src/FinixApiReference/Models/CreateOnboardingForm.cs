using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record CreateOnboardingForm
{
    /// <summary>
    /// An array of objects with the processors and gateways users will be onboarded to.
    /// </summary>
    [JsonPropertyName("merchant_processors")]
    public required IReadOnlyList<MerchantProcessor> MerchantProcessors { get; init; }

    /// <summary>
    /// The prefilled information of the user that's being onboarded. For more information, see <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-forms/#prefilling-fields">Prefilling Fields</see>.
    /// </summary>
    [JsonPropertyName("onboarding_data")]
    public required OnboardingData OnboardingData { get; init; }

    /// <summary>
    /// The information of the initial onboarding link. This is only provided when creating an <c>onboarding_form</c>.
    /// </summary>
    [JsonPropertyName("onboarding_link_details")]
    public required OnboardingLinkDetails OnboardingLinkDetails { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
