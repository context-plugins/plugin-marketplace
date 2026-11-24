using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Optional list of stats for a tier. Retrievable by including <c>expand: [stats]</c> in the tier request body.
/// </summary>
public record TierStats
{
    /// <summary>
    /// Total number of active subscriptions belonging to this tier.
    /// </summary>
    [JsonPropertyName("active_subscriptions")]
    public required int ActiveSubscriptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
