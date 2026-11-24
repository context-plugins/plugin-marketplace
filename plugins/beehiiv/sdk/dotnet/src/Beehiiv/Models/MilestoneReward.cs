using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

/// <summary>
/// The reward object.
/// </summary>
public record MilestoneReward
{
    /// <summary>
    /// A unique prefixed id of the reward.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name given to the reward at creation.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The description given to the name at creation.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A URL of an image to be displayed with the reward.
    /// </summary>
    [JsonPropertyName("image_url")]
    public required string ImageUrl { get; init; }

    /// <summary>
    /// What type of reward this is.&lt;br&gt;<c>physical</c> - A product which must be sent to the subscriber.&lt;br&gt;<c>promo_code</c> - A code that is redeemable for goods or services.
    /// </summary>
    [JsonPropertyName("type")]
    public required MilestoneRewardType Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
