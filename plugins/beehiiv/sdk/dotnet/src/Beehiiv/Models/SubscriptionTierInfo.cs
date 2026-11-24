using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record SubscriptionTierInfo
{
    /// <summary>
    /// The prefixed ID of the tier.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Returns whether or not the tier has any active prices.
    /// </summary>
    [JsonPropertyName("status")]
    public required SubscriptionTierInfoStatus Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
