using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsAnalyticsResponse
{
    [JsonPropertyName("reportId")]
    public required string ReportId { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("totalViews")]
    public required double TotalViews { get; init; }

    [JsonPropertyName("uniqueViewers")]
    public required double? UniqueViewers { get; init; }

    [JsonPropertyName("internalViewers")]
    public required double? InternalViewers { get; init; }

    [JsonPropertyName("externalViewers")]
    public required double? ExternalViewers { get; init; }

    [JsonPropertyName("firstViewedAt")]
    public required string? FirstViewedAt { get; init; }

    [JsonPropertyName("lastViewedAt")]
    public required string? LastViewedAt { get; init; }

    [JsonPropertyName("byDay")]
    public required IReadOnlyList<ByDay> ByDay { get; init; }

    [JsonPropertyName("byVersion")]
    public required IReadOnlyList<ByVersion> ByVersion { get; init; }

    [JsonPropertyName("recentViewers")]
    public required IReadOnlyList<RecentViewer> RecentViewers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
