using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsSubscriptionsBulkActionsRequest
{
    /// <summary>
    /// An array of objects representing the subscriptions to be updated (max 1000).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscriptions")]
    public IReadOnlyList<SubscriptionsPatchRequestSubscriptionsItem>? Subscriptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
