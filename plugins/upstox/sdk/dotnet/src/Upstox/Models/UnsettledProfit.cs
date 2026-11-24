using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record UnsettledProfit
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("todays_profit")]
    public double? TodaysProfit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_days")]
    public double? PreviousDays { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
