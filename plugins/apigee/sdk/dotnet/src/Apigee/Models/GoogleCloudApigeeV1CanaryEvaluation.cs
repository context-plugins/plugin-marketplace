using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.
/// </summary>
public record GoogleCloudApigeeV1CanaryEvaluation
{
    /// <summary>
    /// Required. End time for the evaluation's analysis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Required. Labels used to filter the metrics used for a canary evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricLabels")]
    public GoogleCloudApigeeV1CanaryEvaluationMetricLabels2? MetricLabels { get; init; }

    /// <summary>
    /// Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public Verdict? Verdict { get; init; }

    /// <summary>
    /// Output only. The current state of the canary evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State5? State { get; init; }

    /// <summary>
    /// Required. The newer version that is serving requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("treatment")]
    public string? Treatment { get; init; }

    /// <summary>
    /// Output only. Name of the canary evalution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. The stable version that is serving requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    /// <summary>
    /// Required. Start time for the canary evaluation's analysis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    /// <summary>
    /// Output only. Create time of the canary evaluation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
