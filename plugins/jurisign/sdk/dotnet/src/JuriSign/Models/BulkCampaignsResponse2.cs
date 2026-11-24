using System.Text.Json.Serialization;
using JuriSign.Core.Models;

namespace JuriSign.Models;

public record BulkCampaignsResponse2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public BulkCampaign? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
