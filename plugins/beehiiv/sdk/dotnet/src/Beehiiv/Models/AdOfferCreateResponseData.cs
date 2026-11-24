using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdOfferCreateResponseData
{
    /// <summary>
    /// The ID of the accepted ad offer.
    /// </summary>
    [JsonPropertyName("offer_id")]
    public required string OfferId { get; init; }

    /// <summary>
    /// The ID of the drafted and accepted opportunity created from the offer.
    /// </summary>
    [JsonPropertyName("opportunity_id")]
    public required string OpportunityId { get; init; }

    /// <summary>
    /// The ID of the advertisement creative selected for the opportunity.
    /// </summary>
    [JsonPropertyName("advertisement_id")]
    public required string AdvertisementId { get; init; }

    /// <summary>
    /// The ID of the post where the opportunity was inserted.
    /// </summary>
    [JsonPropertyName("post_id")]
    public required string PostId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
