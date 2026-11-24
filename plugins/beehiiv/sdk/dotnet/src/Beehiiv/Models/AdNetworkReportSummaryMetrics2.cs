using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Metrics for advertisements placed through programmatic ad slots.
/// </summary>
public record AdNetworkReportSummaryMetrics2
{
    /// <summary>
    /// The approved number of unique opens.
    /// </summary>
    [JsonPropertyName("opens")]
    public required int Opens { get; init; }

    /// <summary>
    /// The approved number of verified clicks.
    /// </summary>
    [JsonPropertyName("verified_clicks")]
    public required int VerifiedClicks { get; init; }

    /// <summary>
    /// The formatted revenue approved for payment.
    /// </summary>
    [JsonPropertyName("revenue")]
    public required string Revenue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
