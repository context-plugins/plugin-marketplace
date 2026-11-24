using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdNetworkReport
{
    /// <summary>
    /// The prefixed ID of the publication that ran the advertisement.
    /// </summary>
    [JsonPropertyName("publication_id")]
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the post containing the advertisement.
    /// </summary>
    [JsonPropertyName("post_id")]
    public required string PostId { get; init; }

    /// <summary>
    /// The ID used to attribute engagement events to the advertisement.
    /// </summary>
    [JsonPropertyName("ad_link_id")]
    public required string AdLinkId { get; init; }

    /// <summary>
    /// The approved number of unique opens.
    /// </summary>
    [JsonPropertyName("opens")]
    public required int Opens { get; init; }

    /// <summary>
    /// The approved number of verified clicks.
    /// </summary>
    [JsonPropertyName("verified_clicks")]
    public required int VerifiedClicks { get; init; }

    /// <summary>
    /// The formatted revenue approved for payment.
    /// </summary>
    [JsonPropertyName("revenue")]
    public required string Revenue { get; init; }

    /// <summary>
    /// Whether the advertisement was placed through a programmatic ad slot instead of an on-demand offer.
    /// </summary>
    [JsonPropertyName("is_programmatic")]
    public required bool IsProgrammatic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
