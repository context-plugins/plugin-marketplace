using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsSubscriptionsRequest
{
    /// <summary>
    /// An array of subscription IDs to be updated
    /// </summary>
    [JsonPropertyName("subscription_ids")]
    public required IReadOnlyList<string> SubscriptionIds { get; init; }

    /// <summary>
    /// The new status to set for the subscriptions
    /// </summary>
    [JsonPropertyName("new_status")]
    public required string NewStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
