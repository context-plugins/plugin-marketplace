using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;
using Applike.Core.Validation.Attributes;

namespace Applike.Models;

public record BidOutput
{
    /// <summary>
    /// justtrack's internal ID for the partner
    /// </summary>
    [JsonPropertyName("partnerId")]
    [Minimum(1)]
    public required int PartnerId { get; init; }

    /// <summary>
    /// The identifier for the campaign that originated with the partner
    /// </summary>
    [JsonPropertyName("campaignId")]
    [MinLength(1)]
    public required string CampaignId { get; init; }

    /// <summary>
    /// bid value in USD
    /// </summary>
    [JsonPropertyName("value")]
    [Minimum(0.0)]
    public required double Value { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 of your country, e.g. 'US'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryCode")]
    [StringLength(2, MinimumLength = 2)]
    public string? CountryCode { get; init; }

    /// <summary>
    /// partner's ID for this adset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adSetId")]
    [MinLength(1)]
    public string? AdSetId { get; init; }

    /// <summary>
    /// identifier provided by the ad network to target specific source app
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceId")]
    [MinLength(1)]
    public string? SourceId { get; init; }

    /// <summary>
    /// current status of the latest bid operation
    /// </summary>
    [JsonPropertyName("status")]
    [MinLength(1)]
    public required string Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
