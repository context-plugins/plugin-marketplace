using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record CashUnavailableToTrade
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsettled_profit")]
    public UnsettledProfit? UnsettledProfit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
