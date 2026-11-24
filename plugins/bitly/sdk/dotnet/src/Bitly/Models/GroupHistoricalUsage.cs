using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record GroupHistoricalUsage
{
    /// <summary>
    /// the group's guid
    /// </summary>
    [JsonPropertyName("group_guid")]
    public required string GroupGuid { get; init; }

    /// <summary>
    /// A unit of time (day, week, or month)
    /// </summary>
    [JsonPropertyName("unit")]
    public required string Unit { get; init; }

    /// <summary>
    /// Start date (format "2006-01-02") of the historical usage
    /// </summary>
    [JsonPropertyName("start_date")]
    public required string StartDate { get; init; }

    /// <summary>
    /// End date (format "2006-01-02") of the historical usage
    /// </summary>
    [JsonPropertyName("end_date")]
    public required string EndDate { get; init; }

    /// <summary>
    /// an array of all of the group's historical feature usage
    /// </summary>
    [JsonPropertyName("historical_limit_usage")]
    public required IReadOnlyList<HistoricalFeatureUsage> HistoricalLimitUsage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
