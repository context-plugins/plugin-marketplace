using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record InsightEvent
{
    /// <summary>
    /// A brief description of the event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// The time, in Unix seconds, at which the event was recorded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EventTime")]
    public DateTimeOffset? EventTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestImpactStatistics")]
    public RequestImpactStatistics? ClientRequestImpactStatistics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RootCauseServiceRequestImpactStatistics")]
    public RequestImpactStatistics? RootCauseServiceRequestImpactStatistics { get; init; }

    /// <summary>
    /// The service during the event that is most impacted by the incident.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TopAnomalousServices")]
    public IReadOnlyList<AnomalousService>? TopAnomalousServices { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
