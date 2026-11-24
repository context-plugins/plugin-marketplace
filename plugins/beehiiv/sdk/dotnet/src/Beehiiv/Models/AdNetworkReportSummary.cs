using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdNetworkReportSummary
{
    /// <summary>
    /// The prefixed publication ID. Omitted from account-wide summaries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publication_id")]
    public string? PublicationId { get; init; }

    /// <summary>
    /// The total approved number of unique opens.
    /// </summary>
    [JsonPropertyName("opens")]
    public required int Opens { get; init; }

    /// <summary>
    /// The total approved number of verified clicks.
    /// </summary>
    [JsonPropertyName("verified_clicks")]
    public required int VerifiedClicks { get; init; }

    /// <summary>
    /// The total formatted revenue approved for payment.
    /// </summary>
    [JsonPropertyName("revenue")]
    public required string Revenue { get; init; }

    /// <summary>
    /// Metrics for advertisements accepted as on-demand offers.
    /// </summary>
    [JsonPropertyName("oda")]
    public required AdNetworkReportSummaryMetrics1 Oda { get; init; }

    /// <summary>
    /// Metrics for advertisements placed through programmatic ad slots.
    /// </summary>
    [JsonPropertyName("programmatic")]
    public required AdNetworkReportSummaryMetrics2 Programmatic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
