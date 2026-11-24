using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record ProfitAndLossChargesData
{
    /// <summary>
    /// Total charges for the user
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
    public ProfitAndLossChargesTaxes1? Taxes { get; init; }

    /// <summary>
    /// Other charges levied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charges")]
    public ProfitAndLossOtherChargesTaxes2? Charges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
