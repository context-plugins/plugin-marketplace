using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record PledgeAvailableToTrade
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("margin_from_pledge")]
    public MarginFromPledge? MarginFromPledge { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("margin_used")]
    public PledgeMarginUsed? MarginUsed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
