using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record TestRun
{
    /// <summary>
    /// The pipeline number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pipeline_number")]
    public int? PipelineNumber { get; init; }

    /// <summary>
    /// The workflow ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_id")]
    public Guid? WorkflowId { get; init; }

    /// <summary>
    /// Success rate of tests in this run
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success_rate")]
    public double? SuccessRate { get; init; }

    /// <summary>
    /// Test counts by result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("test_counts")]
    public TestCounts? TestCounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
