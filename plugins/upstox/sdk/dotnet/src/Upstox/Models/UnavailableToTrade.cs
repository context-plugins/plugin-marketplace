using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record UnavailableToTrade
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cash_unavailable_to_trade")]
    public CashUnavailableToTrade? CashUnavailableToTrade { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pledge_unavailable_to_trade")]
    public PledgeUnavailableToTrade? PledgeUnavailableToTrade { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
