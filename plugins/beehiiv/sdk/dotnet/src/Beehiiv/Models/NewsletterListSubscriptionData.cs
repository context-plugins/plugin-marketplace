using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record NewsletterListSubscriptionData
{
    /// <summary>
    /// The prefixed ID of the newsletter list subscription.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the newsletter list.
    /// </summary>
    [JsonPropertyName("list_name")]
    public required string ListName { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription.
    /// </summary>
    [JsonPropertyName("subscription_id")]
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// The email address of the subscriber.
    /// </summary>
    [JsonPropertyName("email")]
    public required string Email { get; init; }

    /// <summary>
    /// The status of the newsletter list subscription.
    /// </summary>
    [JsonPropertyName("status")]
    public required NewsletterListSubscriptionStatus Status { get; init; }

    /// <summary>
    /// The time the subscriber was added to the list. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscribed_at")]
    public int? SubscribedAt { get; init; }

    /// <summary>
    /// The time the subscriber was removed from the list. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsubscribed_at")]
    public int? UnsubscribedAt { get; init; }

    /// <summary>
    /// The time the newsletter list subscription was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The time the newsletter list subscription was last updated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("updated")]
    public required int Updated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
