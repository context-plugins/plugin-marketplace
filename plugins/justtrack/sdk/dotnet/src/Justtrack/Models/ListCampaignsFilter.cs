using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;
using Justtrack.Core.Validation.Attributes;

namespace Justtrack.Models;

public record ListCampaignsFilter
{
    /// <summary>
    /// The identifier for the campaign that originated with the partner
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("campaignId")]
    [MinLength(1)]
    public string? CampaignId { get; init; }

    /// <summary>
    /// justtrack's internal ID for the partner
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partnerId")]
    [Minimum(1)]
    public int? PartnerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
