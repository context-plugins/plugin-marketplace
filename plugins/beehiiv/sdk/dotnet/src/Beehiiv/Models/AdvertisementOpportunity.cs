using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdvertisementOpportunity
{
    /// <summary>
    /// The ID of the opportunity.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the advertiser.
    /// </summary>
    [JsonPropertyName("advertiser_name")]
    public required string AdvertiserName { get; init; }

    /// <summary>
    /// The amount you'll earn.
    /// </summary>
    [JsonPropertyName("payout_rate")]
    public required string PayoutRate { get; init; }

    /// <summary>
    /// What kind of an ad it is. With or without logo.
    /// </summary>
    [JsonPropertyName("advertisement_kind")]
    public required string AdvertisementKind { get; init; }

    /// <summary>
    /// The earliest this ad can be sent. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("send_by_window_start_at")]
    public required int SendByWindowStartAt { get; init; }

    /// <summary>
    /// When this ad needs to be sent by. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("send_by_window_end_at")]
    public required int SendByWindowEndAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
