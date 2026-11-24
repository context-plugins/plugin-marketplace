using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record UserFundMarginData
{
    /// <summary>
    /// Positive values denote the amount blocked into an Open order or position.
    /// Negative value denotes the amount being released.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("used_margin")]
    public double? UsedMargin { get; init; }

    /// <summary>
    /// Instant payin will reflect here
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payin_amount")]
    public double? PayinAmount { get; init; }

    /// <summary>
    /// Amount blocked on futures and options towards SPAN
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("span_margin")]
    public double? SpanMargin { get; init; }

    /// <summary>
    /// Payin amount credited through a manual process
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adhoc_margin")]
    public double? AdhocMargin { get; init; }

    /// <summary>
    /// The amount maintained for withdrawal
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notional_cash")]
    public double? NotionalCash { get; init; }

    /// <summary>
    /// Total margin available for trading
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_margin")]
    public double? AvailableMargin { get; init; }

    /// <summary>
    /// Amount blocked on futures and options towards Exposure
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exposure_margin")]
    public double? ExposureMargin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
