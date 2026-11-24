using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SegmentSubscriptionInput
{
    /// <summary>
    /// Discriminator value: subscriptions
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "subscriptions";

    [JsonPropertyName("subscriptions")]
    public required IReadOnlyList<string> Subscriptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
