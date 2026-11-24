using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record AvailableToTrade
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public double? Total { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cash_available_to_trade")]
    public CashAvailableToTrade? CashAvailableToTrade { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pledge_available_to_trade")]
    public PledgeAvailableToTrade? PledgeAvailableToTrade { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
