using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record Config
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota_total")]
    public int? QuotaTotal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota_duration")]
    public int? QuotaDuration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
