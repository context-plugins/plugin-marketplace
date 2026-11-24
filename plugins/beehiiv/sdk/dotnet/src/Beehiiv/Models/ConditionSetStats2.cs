using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Subscriber count statistics for the condition set. Included when <c>expand[]=stats</c> is specified in the request.
/// </summary>
public record ConditionSetStats2
{
    /// <summary>
    /// Count of active subscribers matching this condition set, calculated synchronously at request time.
    /// </summary>
    [JsonPropertyName("active_subscriber_count")]
    public required int ActiveSubscriberCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
