using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Core.Validation.Attributes;

namespace Upstox.Models;

public record Instrument
{
    /// <summary>
    /// Instrument Key of the Instrument
    /// </summary>
    [JsonPropertyName("instrument_key")]
    [RegularExpression("^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$")]
    public required string InstrumentKey { get; init; }

    /// <summary>
    /// Quantity of the instrument to buy or sell for margin calculation
    /// </summary>
    [JsonPropertyName("quantity")]
    [Minimum(1)]
    public required int Quantity { get; init; }

    /// <summary>
    /// Product with which the order is to be placed
    /// </summary>
    [JsonPropertyName("product")]
    public required string Product { get; init; }

    /// <summary>
    /// Indicates whether its a BUY or SELL order
    /// </summary>
    [JsonPropertyName("transaction_type")]
    public required string TransactionType { get; init; }

    /// <summary>
    /// price
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    [Minimum(0.0)]
    public double? Price { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
