using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record InsightSummary
{
    /// <summary>
    /// The insights unique identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InsightId")]
    public string? InsightId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the group that the insight belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupARN")]
    public string? GroupArn { get; init; }

    /// <summary>
    /// The name of the group that the insight belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupName")]
    public string? GroupName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RootCauseServiceId")]
    public ServiceId? RootCauseServiceId { get; init; }

    /// <summary>
    /// Categories The categories that label and describe the type of insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Categories")]
    public IReadOnlyList<Category>? Categories { get; init; }

    /// <summary>
    /// The current state of the insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("State")]
    public State? State { get; init; }

    /// <summary>
    /// The time, in Unix seconds, at which the insight began.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The time, in Unix seconds, at which the insight ended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// A brief description of the insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Summary")]
    public string? Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestImpactStatistics")]
    public RequestImpactStatistics? ClientRequestImpactStatistics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RootCauseServiceRequestImpactStatistics")]
    public RequestImpactStatistics? RootCauseServiceRequestImpactStatistics { get; init; }

    /// <summary>
    /// The service within the insight that is most impacted by the incident.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TopAnomalousServices")]
    public IReadOnlyList<AnomalousService>? TopAnomalousServices { get; init; }

    /// <summary>
    /// The time, in Unix seconds, that the insight was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastUpdateTime")]
    public DateTimeOffset? LastUpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
