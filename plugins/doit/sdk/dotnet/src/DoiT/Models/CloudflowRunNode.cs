using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// One node's contribution to a run.
/// </summary>
public record CloudflowRunNode
{
    /// <summary>
    /// Node identifier, matching the node in the flow's graph.
    /// </summary>
    [JsonPropertyName("nodeId")]
    public required string NodeId { get; init; }

    /// <summary>
    /// Node display name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Current node status.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1DoiTCloudFlowApi Status { get; init; }

    /// <summary>
    /// Position in execution order. Absent for nodes that never started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stepNumber")]
    public int? StepNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// Failure message. Present when the node failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    /// <summary>
    /// What the node consumed. <b>Always null for non-action nodes</b> — see the operation
    /// description.
    /// </summary>
    [JsonPropertyName("input")]
    public required CloudflowRunNodePayload Input { get; init; }

    /// <summary>
    /// What the node produced. Null until the node reaches a terminal status.
    /// </summary>
    [JsonPropertyName("output")]
    public required CloudflowRunNodePayload Output { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
