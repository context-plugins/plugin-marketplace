using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record EnvironmentUsageSummary
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_hours")]
    public double? TotalHours { get; init; } = 0d;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_cost")]
    public double? TotalCost { get; init; } = 0d;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active_count")]
    public int? ActiveCount { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_count")]
    public int? TotalCount { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
