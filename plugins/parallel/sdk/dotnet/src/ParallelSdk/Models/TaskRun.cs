using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Status of a task run.
/// </summary>
public record TaskRun
{
    /// <summary>
    /// ID of the task run.
    /// </summary>
    [JsonPropertyName("run_id")]
    public required string RunId { get; init; }

    /// <summary>
    /// Identifier for this interaction. Pass this value as <c>previous_interaction_id</c> to reuse context for a future request.
    /// </summary>
    [JsonPropertyName("interaction_id")]
    public required string InteractionId { get; init; }

    /// <summary>
    /// Status of the run.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusParallelAiTasksApi Status { get; init; }

    /// <summary>
    /// Whether the run is currently active, i.e. status is one of {'cancelling', 'queued', 'running'}.
    /// </summary>
    [JsonPropertyName("is_active")]
    public required bool IsActive { get; init; }

    /// <summary>
    /// Warnings for the run, if any.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warnings")]
    public WarningsParallelAiTasksApi? Warnings { get; init; }

    /// <summary>
    /// Error for the run, present only if status is 'failed'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public ErrorParallelAiTasksApi? Error { get; init; }

    /// <summary>
    /// Processor used for the run.
    /// </summary>
    [JsonPropertyName("processor")]
    public required string Processor { get; init; }

    /// <summary>
    /// User-provided metadata stored with the run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata2? Metadata { get; init; }

    /// <summary>
    /// ID of the taskgroup to which the run belongs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskgroup_id")]
    public TaskgroupId? TaskgroupId { get; init; }

    /// <summary>
    /// Timestamp of the creation of the task, as an RFC 3339 string.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required CreatedAt CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of the last modification to the task, as an RFC 3339 string.
    /// </summary>
    [JsonPropertyName("modified_at")]
    public required ModifiedAt1 ModifiedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
