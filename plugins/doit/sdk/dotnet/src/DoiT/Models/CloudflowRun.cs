using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A run plus what each of its nodes consumed and produced.
/// </summary>
public record CloudflowRun
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("flowId")]
    public required string FlowId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flowName")]
    public string? FlowName { get; init; }

    [JsonPropertyName("status")]
    public required StatusDoiTCloudFlowApi Status { get; init; }

    /// <summary>
    /// True when the run was started through <c>actions/test-run</c>.
    /// </summary>
    [JsonPropertyName("isTest")]
    public required bool IsTest { get; init; }

    [JsonPropertyName("triggeredBy")]
    public required string TriggeredBy { get; init; }

    [JsonPropertyName("triggerTime")]
    public required DateTimeOffset TriggerTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stoppedBy")]
    public string? StoppedBy { get; init; }

    /// <summary>
    /// One entry per node, in execution order.
    /// </summary>
    [JsonPropertyName("nodes")]
    public required IReadOnlyList<CloudflowRunNode> Nodes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
