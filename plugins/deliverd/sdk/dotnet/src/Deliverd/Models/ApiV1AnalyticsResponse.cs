using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1AnalyticsResponse
{
    [JsonPropertyName("days")]
    public required double Days { get; init; }

    [JsonPropertyName("totalViews")]
    public required double TotalViews { get; init; }

    [JsonPropertyName("uniqueViewers")]
    public required double UniqueViewers { get; init; }

    [JsonPropertyName("activeReports")]
    public required double ActiveReports { get; init; }

    [JsonPropertyName("externallySharedReports")]
    public required double ExternallySharedReports { get; init; }

    [JsonPropertyName("publicReports")]
    public required double PublicReports { get; init; }

    [JsonPropertyName("publishesInPeriod")]
    public required double PublishesInPeriod { get; init; }

    [JsonPropertyName("topReports")]
    public required IReadOnlyList<TopReport> TopReports { get; init; }

    [JsonPropertyName("inactiveReports")]
    public required IReadOnlyList<InactiveReport> InactiveReports { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
