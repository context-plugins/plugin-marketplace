using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record WorkflowRerunRequest
{
    /// <summary>
    /// List of job IDs to rerun. If empty, all jobs will be rerun.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobs")]
    public IReadOnlyList<Guid>? Jobs { get; init; }

    /// <summary>
    /// Whether to rerun only from failed jobs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from_failed")]
    public bool? FromFailed { get; init; }

    /// <summary>
    /// Whether to enable SSH access for the rerun
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enable_ssh")]
    public bool? EnableSsh { get; init; }

    /// <summary>
    /// Whether to rerun only the specified jobs and their dependencies
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparse_tree")]
    public bool? SparseTree { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
