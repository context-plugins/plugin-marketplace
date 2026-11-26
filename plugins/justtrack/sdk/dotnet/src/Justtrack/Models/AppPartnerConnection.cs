using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;
using Justtrack.Core.Validation.Attributes;
using Justtrack.Models.Enums;

namespace Justtrack.Models;

public record AppPartnerConnection
{
    /// <summary>
    /// List of campaign types this partner can run.
    /// </summary>
    [JsonPropertyName("campaignTypes")]
    [MinLength(1)]
    public required IReadOnlyList<RequiredCampaignType> CampaignTypes { get; init; }

    /// <summary>
    /// justtrack internal ID for the channel used by default to create campaigns
    /// </summary>
    [JsonPropertyName("defaultChannelId")]
    [Minimum(1)]
    public required int DefaultChannelId { get; init; }

    /// <summary>
    /// if you want to allow creation of campaigns with multiple countries for this partner
    /// </summary>
    [JsonPropertyName("multiCountryCampaignAllowed")]
    public required bool MultiCountryCampaignAllowed { get; init; }

    /// <summary>
    /// a unique string to identify this partner among others on tracking urls
    /// </summary>
    [JsonPropertyName("trackingUrlSlug")]
    [MinLength(1)]
    public required string TrackingUrlSlug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
