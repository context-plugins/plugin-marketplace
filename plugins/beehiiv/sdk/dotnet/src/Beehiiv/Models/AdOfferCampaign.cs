using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdOfferCampaign
{
    /// <summary>
    /// The campaign name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The message from the advertiser to the publisher.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message_to_publisher")]
    public string? MessageToPublisher { get; init; }

    /// <summary>
    /// The item promoted by the campaign.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promoted_item")]
    public string? PromotedItem { get; init; }

    /// <summary>
    /// Additional promoted item details when applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promoted_item_other")]
    public string? PromotedItemOther { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
