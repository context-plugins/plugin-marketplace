using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record InsiderTradesSummary
{
    /// <summary>
    /// Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so they run lower than the transaction counts of <c>/api/symbols/{ticker}/insider-summary/</c>.
    /// </summary>
    [JsonPropertyName("last_3m")]
    public required InsiderTradesWindow Last3M { get; init; }

    /// <summary>
    /// Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so they run lower than the transaction counts of <c>/api/symbols/{ticker}/insider-summary/</c>.
    /// </summary>
    [JsonPropertyName("last_12m")]
    public required InsiderTradesWindow Last12M { get; init; }

    /// <summary>
    /// Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so they run lower than the transaction counts of <c>/api/symbols/{ticker}/insider-summary/</c>.
    /// </summary>
    [JsonPropertyName("all_time")]
    public required InsiderTradesWindow AllTime { get; init; }

    /// <summary>
    /// Most active reporters of the last 12 months, at most five.
    /// </summary>
    [JsonPropertyName("top_insiders")]
    public required IReadOnlyList<InsiderTradesTopInsider> TopInsiders { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
