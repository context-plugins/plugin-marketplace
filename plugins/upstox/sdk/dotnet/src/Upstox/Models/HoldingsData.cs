using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record HoldingsData
{
    /// <summary>
    /// The standard ISIN representing stocks listed on multiple exchanges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isin")]
    public string? Isin { get; init; }

    /// <summary>
    /// Quantity either blocked towards open or completed order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cnc_used_quantity")]
    public int? CncUsedQuantity { get; init; }

    /// <summary>
    /// Category of collateral assigned by RMS
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collateral_type")]
    public string? CollateralType { get; init; }

    /// <summary>
    /// Name of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_name")]
    public string? CompanyName { get; init; }

    /// <summary>
    /// This is the haircut percentage applied from RMS (applicable incase of collateral)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("haircut")]
    public double? Haircut { get; init; }

    /// <summary>
    /// Shows if the order was either Intraday, Delivery, CO or OCO
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public string? Product { get; init; }

    /// <summary>
    /// The total holding qty
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public int? Quantity { get; init; }

    /// <summary>
    /// Shows the trading symbol of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tradingsymbol")]
    public string? Tradingsymbol { get; init; }

    /// <summary>
    /// The last traded price of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_price")]
    public double? LastPrice { get; init; }

    /// <summary>
    /// Closing price of the instrument from the last trading day
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_price")]
    public double? ClosePrice { get; init; }

    /// <summary>
    /// Profit and Loss
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pnl")]
    public double? Pnl { get; init; }

    /// <summary>
    /// Day's change in absolute value for the stock
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day_change")]
    public double? DayChange { get; init; }

    /// <summary>
    /// Day's change in percentage for the stock
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day_change_percentage")]
    public double? DayChangePercentage { get; init; }

    /// <summary>
    /// Key issued by Upstox for the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_token")]
    public string? InstrumentToken { get; init; }

    /// <summary>
    /// Average price at which the net holding quantity was acquired
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_price")]
    public double? AveragePrice { get; init; }

    /// <summary>
    /// Quantity marked as collateral by RMS on users request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collateral_quantity")]
    public int? CollateralQuantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collateral_update_quantity")]
    public int? CollateralUpdateQuantity { get; init; }

    /// <summary>
    /// Shows the trading symbol of the instrument
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trading_symbol")]
    public string? TradingSymbol { get; init; }

    /// <summary>
    /// Quantity on T+1 day after order execution
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("t1_quantity")]
    public int? T1Quantity { get; init; }

    /// <summary>
    /// Exchange of the trading symbol
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchange")]
    public ExchangeOpenApiDefinitionPortfolioApi? Exchange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
