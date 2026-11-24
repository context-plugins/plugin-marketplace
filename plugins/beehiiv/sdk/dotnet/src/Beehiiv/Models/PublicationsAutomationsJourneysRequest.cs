using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsAutomationsJourneysRequest
{
    /// <summary>
    /// The email address associated with the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_id")]
    public string? SubscriptionId { get; init; }

    /// <summary>
    /// Override the publication's default double opt-in settings for this subscription. Possible values are:
    /// - "on" — The subscriber will receive a double opt-in confirmation email and will need to confirm their subscription prior to being marked as active.
    /// - "off" — The subscriber will be marked as active immediately and will not receive a double opt-in confirmation email.
    /// - "not_set" — The publication's default double opt-in settings will be applied to this subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("double_opt_override")]
    public string? DoubleOptOverride { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
