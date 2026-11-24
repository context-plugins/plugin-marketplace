using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdOffer
{
    /// <summary>
    /// The ID of the offer or pending opportunity.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The payout model for the offer.
    /// </summary>
    [JsonPropertyName("payout_model")]
    public required string PayoutModel { get; init; }

    /// <summary>
    /// The formatted payout per eligible click.
    /// </summary>
    [JsonPropertyName("payout_per_click")]
    public required string PayoutPerClick { get; init; }

    /// <summary>
    /// The formatted payout per thousand eligible opens.
    /// </summary>
    [JsonPropertyName("payout_per_mille")]
    public required string PayoutPerMille { get; init; }

    /// <summary>
    /// The formatted estimated payout.
    /// </summary>
    [JsonPropertyName("estimated_payout")]
    public required string EstimatedPayout { get; init; }

    /// <summary>
    /// The date the advertisement should be sent by.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_by")]
    public DateTimeOffset? SendBy { get; init; }

    [JsonPropertyName("campaign")]
    public required AdOfferCampaign Campaign { get; init; }

    [JsonPropertyName("advertiser")]
    public required AdOfferAdvertiser Advertiser { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
