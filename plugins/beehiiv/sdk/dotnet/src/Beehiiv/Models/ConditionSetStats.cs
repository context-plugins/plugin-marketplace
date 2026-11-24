using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record ConditionSetStats
{
    /// <summary>
    /// Count of active subscribers matching this condition set, calculated synchronously at request time.
    /// </summary>
    [JsonPropertyName("active_subscriber_count")]
    public required int ActiveSubscriberCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
