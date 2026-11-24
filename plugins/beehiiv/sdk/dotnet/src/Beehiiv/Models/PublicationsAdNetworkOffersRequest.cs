using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PublicationsAdNetworkOffersRequest
{
    /// <summary>
    /// The ID of the ad offer to accept.
    /// </summary>
    [JsonPropertyName("offer_id")]
    public required string OfferId { get; init; }

    /// <summary>
    /// The ID of the advertisement creative to use.
    /// </summary>
    [JsonPropertyName("advertisement_id")]
    public required string AdvertisementId { get; init; }

    /// <summary>
    /// The ID of the post where the advertisement should be inserted.
    /// </summary>
    [JsonPropertyName("post_id")]
    public required string PostId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
