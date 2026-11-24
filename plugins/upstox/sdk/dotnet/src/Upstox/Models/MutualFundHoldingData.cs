using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MutualFundHoldingData
{
    /// <summary>
    /// Folio number when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("folio")]
    public string? Folio { get; init; }

    /// <summary>
    /// Fund display name when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fund")]
    public string? Fund { get; init; }

    /// <summary>
    /// Unrealized P/L.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pnl")]
    public double? Pnl { get; init; }

    /// <summary>
    /// Units held.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public double? Quantity { get; init; }

    /// <summary>
    /// ISIN of the fund, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_key")]
    public string? InstrumentKey { get; init; }

    /// <summary>
    /// Average cost per unit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_price")]
    public double? AveragePrice { get; init; }

    /// <summary>
    /// Last available NAV.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_price")]
    public double? LastPrice { get; init; }

    /// <summary>
    /// Date for which last NAV is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_price_date")]
    public string? LastPriceDate { get; init; }

    /// <summary>
    /// Units pledged as collateral when applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pledged_quantity")]
    public double? PledgedQuantity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
