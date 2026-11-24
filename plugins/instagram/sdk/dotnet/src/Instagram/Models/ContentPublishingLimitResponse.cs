using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record ContentPublishingLimitResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public Config? Config { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota_usage")]
    public int? QuotaUsage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
