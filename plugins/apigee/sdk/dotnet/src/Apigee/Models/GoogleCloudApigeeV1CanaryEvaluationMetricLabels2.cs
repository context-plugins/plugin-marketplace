using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. Labels used to filter the metrics used for a canary evaluation.
/// </summary>
public record GoogleCloudApigeeV1CanaryEvaluationMetricLabels2
{
    /// <summary>
    /// The environment ID associated with the metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("env")]
    public string? Env { get; init; }

    /// <summary>
    /// Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instance_id")]
    public string? InstanceId { get; init; }

    /// <summary>
    /// Required. The location associated with the metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
