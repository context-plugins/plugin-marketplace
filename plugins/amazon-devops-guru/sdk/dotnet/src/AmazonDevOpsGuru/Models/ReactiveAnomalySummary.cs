using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ReactiveAnomalySummary
{
    /// <summary>
    /// The ID of the reactive anomaly.
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
    /// The status of the reactive anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status3? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnomalyTimeRange")]
    public AnomalyTimeRange? AnomalyTimeRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnomalyReportedTimeRange")]
    public AnomalyReportedTimeRange? AnomalyReportedTimeRange { get; init; }

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
    /// The type of the reactive anomaly. It can be one of the following types. CAUSAL - the anomaly can cause a new insight. CONTEXTUAL - the anomaly contains additional information about an insight or its causal anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// The name of the reactive anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// A description of the reactive anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// The ID of the causal anomaly that is associated with this reactive anomaly. The ID of a <c>CAUSAL</c> anomaly is always <c>NULL</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CausalAnomalyId")]
    public string? CausalAnomalyId { get; init; }

    /// <summary>
    /// The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnomalyResources")]
    public IReadOnlyList<AnomalyResource>? AnomalyResources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
