using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record TradeWiseProfitAndLossData
{
    /// <summary>
    /// The quantity of stock traded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public double? Quantity { get; init; }

    /// <summary>
    /// ISIN of the stock
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isin")]
    public string? Isin { get; init; }

    /// <summary>
    /// Name of the scrip traded
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scrip_name")]
    public string? ScripName { get; init; }

    /// <summary>
    /// FUT - Futures
    /// <para>
    /// OPT - Options
    /// </para>
    /// <para>
    /// EQ - Equity
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trade_type")]
    public string? TradeType { get; init; }

    /// <summary>
    /// The date on which the stock was bought
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buy_date")]
    public string? BuyDate { get; init; }

    /// <summary>
    /// The average rate at which each quantity of the stock was bought
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buy_average")]
    public double? BuyAverage { get; init; }

    /// <summary>
    /// The date on which the stock was sold
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sell_date")]
    public string? SellDate { get; init; }

    /// <summary>
    /// The average rate at which each quantity of the stock was sold
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sell_average")]
    public double? SellAverage { get; init; }

    /// <summary>
    /// Total buy amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buy_amount")]
    public double? BuyAmount { get; init; }

    /// <summary>
    /// Total sell amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sell_amount")]
    public double? SellAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
