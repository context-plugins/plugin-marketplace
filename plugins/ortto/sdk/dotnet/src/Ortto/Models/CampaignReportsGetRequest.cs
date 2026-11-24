using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record CampaignReportsGetRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("campaign_id")]
    public string? CampaignId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asset_id")]
    public string? AssetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
