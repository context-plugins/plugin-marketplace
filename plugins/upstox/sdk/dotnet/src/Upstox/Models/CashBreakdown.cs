using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record CashBreakdown
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("opening_balance")]
    public double? OpeningBalance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("added_today")]
    public double? AddedToday { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withdrawn_today")]
    public double? WithdrawnToday { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_from_stock_sale")]
    public double? AmountFromStockSale { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unpaid_charges")]
    public double? UnpaidCharges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
