using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record TickerEarningsHistory
{
    /// <summary>
    /// The requested ticker, normalized to upper case.
    /// </summary>
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    /// <summary>
    /// Newest first, capped at 20. Empty when no read exists yet.
    /// </summary>
    [JsonPropertyName("reports")]
    public required IReadOnlyList<TickerEarningsReport> Reports { get; init; }

    /// <summary>
    /// Same field, same rules, as <c>next_report_date</c> on the symbol detail response: the company-confirmed date of the next report in America/New_York, or <c>null</c> when AlphAI holds no confirmed one. Never an estimate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_report_date")]
    public DateTimeOffset? NextReportDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
