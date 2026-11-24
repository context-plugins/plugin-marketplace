using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Core.Validation.Attributes;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record GttRule
{
    /// <summary>
    /// Defines the strategy for the GTT order leg:
    /// ENTRY - First leg order
    /// STOPLOSS - Stop-loss order
    /// TARGET - Target order
    /// </summary>
    [JsonPropertyName("strategy")]
    public required Strategy Strategy { get; init; }

    /// <summary>
    /// Trigger type for each leg of the order
    /// </summary>
    [JsonPropertyName("trigger_type")]
    public required TriggerType TriggerType { get; init; }

    /// <summary>
    /// Trigger price for the GTT order leg
    /// </summary>
    [JsonPropertyName("trigger_price")]
    public required double TriggerPrice { get; init; }

    /// <summary>
    /// Optional parameter defining the trailing gap for the GTT order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trailing_gap")]
    public double? TrailingGap { get; init; }

    /// <summary>
    /// Optional parameter defining the market protection percentage for the GTT order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("market_protection")]
    [Minimum(-1.0)]
    [Maximum(25.0)]
    public double? MarketProtection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
