using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsBulkSubscriptionsRequest
{
    [JsonPropertyName("subscriptions")]
    public required IReadOnlyList<SubscriptionRequest> Subscriptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
