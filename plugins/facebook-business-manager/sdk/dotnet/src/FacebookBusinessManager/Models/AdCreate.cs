using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Models;

public record AdCreate
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("adset_id")]
    public required string AdsetId { get; init; }

    [JsonPropertyName("creative")]
    public required Creative Creative { get; init; }

    [JsonPropertyName("status")]
    public required StatusFacebookBusinessManagerFacebookMarketingAdsApi Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
