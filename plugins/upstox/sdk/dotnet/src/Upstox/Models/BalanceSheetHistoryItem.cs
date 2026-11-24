using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record BalanceSheetHistoryItem
{
    /// <summary>
    /// Total assets in the reported period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_asset")]
    public double? TotalAsset { get; init; }

    /// <summary>
    /// Total liabilities in the reported period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_liability")]
    public double? TotalLiability { get; init; }

    /// <summary>
    /// Reporting period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period")]
    public string? Period { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
