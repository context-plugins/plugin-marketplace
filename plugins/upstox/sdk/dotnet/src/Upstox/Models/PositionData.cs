using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record PositionData
{
    /// <summary>
    /// Exchange to which the order is associated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public Exchange1? Exchange { get; init; }

    /// <summary>
    /// The quantity/lot size multiplier used for calculating P&amp;Ls
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multiplier")]
    public double? Multiplier { get; init; }

    /// <summary>
    /// Net value of the position
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// Profit and loss - net returns on the position
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pnl")]
    public double? Pnl { get; init; }

    /// <summary>
    /// Shows if the order was either Intraday, Delivery, CO or OCO
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public string? Product { get; init; }

    /// <summary>
    /// Key issued by Upstox for the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_token")]
    public string? InstrumentToken { get; init; }

    /// <summary>
    /// Average price at which the net position quantity was acquired
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_price")]
    public double? AveragePrice { get; init; }

    /// <summary>
    /// Net value of the bought quantities
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buy_value")]
    public double? BuyValue { get; init; }

    /// <summary>
    /// Quantity held previously and carried forward over night
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overnight_quantity")]
    public int? OvernightQuantity { get; init; }

    /// <summary>
    /// Amount at which the quantity is bought during the day
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day_buy_value")]
    public double? DayBuyValue { get; init; }

    /// <summary>
    /// Average price at which the day qty was bought. Default is empty string
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day_buy_price")]
    public double? DayBuyPrice { get; init; }

    /// <summary>
    /// Amount at which the quantity was bought in the previous session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overnight_buy_amount")]
    public double? OvernightBuyAmount { get; init; }

    /// <summary>
    /// Quantity bought in the previous session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overnight_buy_quantity")]
    public int? OvernightBuyQuantity { get; init; }

    /// <summary>
    /// Quantity bought during the day
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day_buy_quantity")]
    public int? DayBuyQuantity { get; init; }

    /// <summary>
    /// Amount at which the quantity is sold during the day
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day_sell_value")]
    public double? DaySellValue { get; init; }

    /// <summary>
    /// Average price at which the day quantity was sold
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day_sell_price")]
    public double? DaySellPrice { get; init; }

    /// <summary>
    /// Amount at which the quantity was sold in the previous session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overnight_sell_amount")]
    public double? OvernightSellAmount { get; init; }

    /// <summary>
    /// Quantity sold short in the previous session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overnight_sell_quantity")]
    public int? OvernightSellQuantity { get; init; }

    /// <summary>
    /// Quantity sold during the day
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day_sell_quantity")]
    public int? DaySellQuantity { get; init; }

    /// <summary>
    /// Quantity left after nullifying Day and CF buy quantity towards Day and CF sell quantity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; }

    /// <summary>
    /// Last traded market price of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_price")]
    public double? LastPrice { get; init; }

    /// <summary>
    /// Day PnL generated against open positions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unrealised")]
    public double? Unrealised { get; init; }

    /// <summary>
    /// Day PnL generated against closed positions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("realised")]
    public double? Realised { get; init; }

    /// <summary>
    /// Net value of the sold quantities
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sell_value")]
    public double? SellValue { get; init; }

    /// <summary>
    /// Shows the trading symbol of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tradingsymbol")]
    public string? Tradingsymbol { get; init; }

    /// <summary>
    /// Shows the trading symbol of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trading_symbol")]
    public string? TradingSymbol { get; init; }

    /// <summary>
    /// Closing price of the instrument from the last trading day
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_price")]
    public double? ClosePrice { get; init; }

    /// <summary>
    /// Average price at which quantities were bought
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buy_price")]
    public double? BuyPrice { get; init; }

    /// <summary>
    /// Average price at which quantities were sold
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sell_price")]
    public double? SellPrice { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
