using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ProactiveAnomaly
{
    /// <summary>
    /// The ID of a proactive anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's severity. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Severity")]
    public Severity? Severity { get; init; }

    /// <summary>
    /// The status of a proactive anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status? Status { get; init; }

    /// <summary>
    /// The time of the anomaly's most recent update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UpdateTime")]
    public DateTimeOffset? UpdateTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnomalyTimeRange")]
    public AnomalyTimeRange? AnomalyTimeRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnomalyReportedTimeRange")]
    public AnomalyReportedTimeRange? AnomalyReportedTimeRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictionTimeRange")]
    public PredictionTimeRange? PredictionTimeRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceDetails")]
    public AnomalySourceDetails? SourceDetails { get; init; }

    /// <summary>
    /// The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AssociatedInsightId")]
    public string? AssociatedInsightId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceCollection")]
    public ResourceCollection? ResourceCollection { get; init; }

    /// <summary>
    /// A threshold that was exceeded by behavior in analyzed resources. Exceeding this threshold is related to the anomalous behavior that generated this anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Limit")]
    public double? Limit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceMetadata")]
    public AnomalySourceMetadata? SourceMetadata { get; init; }

    /// <summary>
    /// Information about a resource in which DevOps Guru detected anomalous behavior.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnomalyResources")]
    public IReadOnlyList<AnomalyResource>? AnomalyResources { get; init; }

    /// <summary>
    /// A description of the proactive anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
