using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The milestone object.
/// </summary>
public record Milestone
{
    /// <summary>
    /// A unique prefixed id of the milestone.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Only available with a promo code reward type. This indicates that an email will automatically be sent when the milestone is reached containing the reward promo code.
    /// </summary>
    [JsonPropertyName("auto_fulfill")]
    public required bool AutoFulfill { get; init; }

    /// <summary>
    /// The number of referrals needed to reach this milestone.
    /// </summary>
    [JsonPropertyName("num_referrals")]
    public required int NumReferrals { get; init; }

    /// <summary>
    /// The reward object.
    /// </summary>
    [JsonPropertyName("reward")]
    public required MilestoneReward Reward { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
