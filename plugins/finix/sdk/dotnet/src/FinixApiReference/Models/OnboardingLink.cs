using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// The information of the initial onboarding link. This is only provided when creating an <c>onboarding_form</c>.
/// </summary>
public record OnboardingLink
{
    /// <summary>
    /// A UTC timestamp detailing when the onboarding form expires and will no longer be available via <c>link_url</c>. To generate a new link to the same form, see <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-forms/#fetching-an-onboarding-form-link">Get an Onboarding Form URL</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expires_at")]
    public string? ExpiresAt { get; init; }

    /// <summary>
    /// The URL of the user's Finix Onboarding Form. Users can use the <c>link_url</c> to return to the form until the link expires.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link_url")]
    public string? LinkUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
