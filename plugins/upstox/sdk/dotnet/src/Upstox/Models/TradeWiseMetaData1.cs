using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Response data for brokerage
/// </summary>
public record TradeWiseMetaData1
{
    /// <summary>
    /// Total count of trades in the trade wise P and L report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trades_count")]
    public int? TradesCount { get; init; }

    /// <summary>
    /// Maximum number of trades in a page of the trade wise P and L report API
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page_size_limit")]
    public int? PageSizeLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
