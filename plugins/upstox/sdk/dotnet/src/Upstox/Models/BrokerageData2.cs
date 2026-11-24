using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Response data for charges details
/// </summary>
public record BrokerageData2
{
    /// <summary>
    /// Total charges for the order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public double? Total { get; init; }

    /// <summary>
    /// Brokerage charges for the order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brokerage")]
    public double? Brokerage { get; init; }

    /// <summary>
    /// Taxes levied on order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxes")]
    public BrokerageTaxes1? Taxes { get; init; }

    /// <summary>
    /// Other charges levied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otherTaxes")]
    public OtherTaxes1? OtherTaxes { get; init; }

    /// <summary>
    /// DP charges related information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dpPlan")]
    public DpPlan1? DpPlan { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("other_charges")]
    public OtherTaxes? OtherCharges { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dp_plan")]
    public DpPlan? DpPlan2 { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
