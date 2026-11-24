using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record Margin
{
    /// <summary>
    /// Upfront margin mandatory by exchange for derivatives trade applicable on only FNO trade
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("span_margin")]
    public double? SpanMargin { get; init; }

    /// <summary>
    /// Based on ELM percentage values provided by exchange, applicable on only FNO trade
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exposure_margin")]
    public double? ExposureMargin { get; init; }

    /// <summary>
    /// Margin applicable for any equity trade
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("equity_margin")]
    public double? EquityMargin { get; init; }

    /// <summary>
    /// Option premium required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("net_buy_premium")]
    public double? NetBuyPremium { get; init; }

    /// <summary>
    /// Application margin applicable on MCX FNO trade for certain commodities
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_margin")]
    public double? AdditionalMargin { get; init; }

    /// <summary>
    /// Total margin required for the basket
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_margin")]
    public double? TotalMargin { get; init; }

    /// <summary>
    /// Tender margin
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tender_margin")]
    public double? TenderMargin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
