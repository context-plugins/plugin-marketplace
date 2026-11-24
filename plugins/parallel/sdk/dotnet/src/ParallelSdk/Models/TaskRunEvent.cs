using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Event when a task run transitions to a non-active status.
/// <para>
/// May indicate completion, cancellation, or failure.
/// </para>
/// </summary>
public record TaskRunEvent
{
    /// <summary>
    /// Event type; always 'task_run.state'.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "task_run.state";

    /// <summary>
    /// Cursor to resume the event stream. Always empty for non Task Group runs.
    /// </summary>
    [JsonPropertyName("event_id")]
    public required EventIdModel EventId { get; init; }

    /// <summary>
    /// Input to the run; included only if requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public Input1ParallelAiTasksApi? Input { get; init; }

    /// <summary>
    /// Task run object.
    /// </summary>
    [JsonPropertyName("run")]
    public required TaskRun2 Run { get; init; }

    /// <summary>
    /// Output from the run; included only if requested and if status == <c>completed</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output")]
    public Output1ParallelAiTasksApi? Output { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
