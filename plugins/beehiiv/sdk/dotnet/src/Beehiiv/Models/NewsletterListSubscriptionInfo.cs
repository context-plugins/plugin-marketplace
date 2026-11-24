using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record NewsletterListSubscriptionInfo
{
    /// <summary>
    /// The prefixed ID of the newsletter list subscription.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The prefixed ID of the newsletter list.
    /// </summary>
    [JsonPropertyName("newsletter_list_id")]
    public required string NewsletterListId { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription.
    /// </summary>
    [JsonPropertyName("subscription_id")]
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// The status of the newsletter list subscription.
    /// </summary>
    [JsonPropertyName("status")]
    public required NewsletterListSubscriptionStatus Status { get; init; }

    /// <summary>
    /// The time the subscription was activated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscribed_at")]
    public int? SubscribedAt { get; init; }

    /// <summary>
    /// The time the subscription was deactivated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsubscribed_at")]
    public int? UnsubscribedAt { get; init; }

    /// <summary>
    /// The time the newsletter list subscription was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required int CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
