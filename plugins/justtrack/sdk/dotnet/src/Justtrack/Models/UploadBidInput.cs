using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;
using Justtrack.Core.Validation.Attributes;

namespace Justtrack.Models;

public record UploadBidInput
{
    /// <summary>
    /// partner's ID for this adset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adSetId")]
    [MinLength(1)]
    public string? AdSetId { get; init; }

    /// <summary>
    /// The identifier for the campaign that originated with the partner
    /// </summary>
    [JsonPropertyName("campaignId")]
    [MinLength(1)]
    public required string CampaignId { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 of your country, e.g. 'US'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryCode")]
    [StringLength(2, MinimumLength = 2)]
    public string? CountryCode { get; init; }

    /// <summary>
    /// true, if you want to delete the bid. Defaults to false
    /// </summary>
    [JsonPropertyName("delete")]
    public required bool Delete { get; init; }

    /// <summary>
    /// bid value in USD
    /// </summary>
    [JsonPropertyName("optimalBidUsd")]
    [Minimum(0.0)]
    public required double OptimalBidUsd { get; init; }

    /// <summary>
    /// justtrack's internal ID for the partner
    /// </summary>
    [JsonPropertyName("partnerId")]
    [Minimum(1)]
    public required int PartnerId { get; init; }

    /// <summary>
    /// identifier provided by the ad network to target specific source app
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceId")]
    [MinLength(1)]
    public string? SourceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
