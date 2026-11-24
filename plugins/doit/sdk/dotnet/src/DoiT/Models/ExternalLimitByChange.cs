using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Limit by change filter; a report may configure at most two of <c>metricFilter</c>,
/// <c>limitByChange</c> and rank <c>group</c> limits. Without <c>secondaryTimeRange</c> the change is
/// a period-over-period delta between adjacent time buckets. With it, each row's
/// primary-range total is compared with its secondary-range total, so column dimensions
/// (<c>dimensions</c>, which <c>timeInterval</c> fills implicitly when omitted) only add buckets
/// to those totals, while <c>group</c> gives every row its own change. A percentage change
/// is comparable while both periods hold the same number of buckets; an absolute change
/// is their plain difference and so scales with the bucket count. A row present in only
/// one range counts as zero there, so a percentage threshold cannot be met from zero. A
/// percentage-typed custom metric, or count aggregation, is rejected with
/// <c>LIMIT_BY_CHANGE_METRIC_NOT_ADDITIVE_WITH_SECONDARY</c>.
/// On PATCH, omit to preserve the existing limit; send null to remove it.
/// </summary>
public record ExternalLimitByChange
{
    /// <summary>
    /// The metric the change is measured on. It must also be listed in the report's
    /// <c>config.metrics</c>; otherwise the request is rejected with a 400 and nothing is saved.
    /// </summary>
    [JsonPropertyName("metric")]
    public required ExternalMetric Metric { get; init; }

    [JsonPropertyName("changeType")]
    public required ChangeType ChangeType { get; init; }

    /// <summary>
    /// Comparison operator for period-over-period deltas: <c>gt</c> (Greater Than), <c>gte</c>
    /// (Greater Than or Equals), <c>lt</c> (Less Than), <c>lte</c> (Less Than or Equals), <c>b</c>
    /// (Between), <c>nb</c> (Not Between).
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator1 Operator { get; init; }

    /// <summary>
    /// Threshold value(s). Unary operators (<c>gt</c>, <c>gte</c>, <c>lt</c>, <c>lte</c>) use one entry; the range
    /// operators (<c>b</c>, <c>nb</c>) require two ordered entries.
    /// </summary>
    [JsonPropertyName("values")]
    public required IReadOnlyList<double> Values { get; init; }

    /// <summary>
    /// When true, keeps rows whose deltas could not be evaluated.
    /// </summary>
    [JsonPropertyName("includeIncompleteData")]
    public required bool IncludeIncompleteData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
