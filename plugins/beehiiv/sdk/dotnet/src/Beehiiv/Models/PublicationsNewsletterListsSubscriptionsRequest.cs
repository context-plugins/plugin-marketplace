using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsNewsletterListsSubscriptionsRequest
{
    /// <summary>
    /// The prefixed ID of the subscription to subscribe. Either subscription_id or email must be provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_id")]
    public string? SubscriptionId { get; init; }

    /// <summary>
    /// The email address of the subscription to subscribe. Either subscription_id or email must be provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
