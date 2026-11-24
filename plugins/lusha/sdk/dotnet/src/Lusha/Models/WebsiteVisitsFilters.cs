using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record WebsiteVisitsFilters
{
    /// <summary>
    /// Restrict to specific score bands.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scoreBands")]
    public IReadOnlyList<ScoreBand1>? ScoreBands { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code filters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visitorCountries")]
    public VisitorCountries? VisitorCountries { get; init; }

    /// <summary>
    /// Score range (1–100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public WebsiteVisitsIntRange? Score { get; init; }

    /// <summary>
    /// Integer range filter (non-negative)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalSessions")]
    public WebsiteVisitsIntRange? TotalSessions { get; init; }

    /// <summary>
    /// Float range filter (non-negative)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avgSessionMinutes")]
    public WebsiteVisitsFloatRange? AvgSessionMinutes { get; init; }

    /// <summary>
    /// Integer range filter (non-negative)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uniqueVisitors")]
    public WebsiteVisitsIntRange? UniqueVisitors { get; init; }

    /// <summary>
    /// Integer range filter (non-negative)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysVisited")]
    public WebsiteVisitsIntRange? DaysVisited { get; init; }

    /// <summary>
    /// Integer range filter (non-negative)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("highIntentPageviews")]
    public WebsiteVisitsIntRange? HighIntentPageviews { get; init; }

    /// <summary>
    /// Integer range filter (non-negative)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysSinceLastVisit")]
    public WebsiteVisitsIntRange? DaysSinceLastVisit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
