using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Request to run a task.
/// </summary>
public record TaskRunInput
{
    /// <summary>
    /// Processor to use for the task.
    /// </summary>
    [JsonPropertyName("processor")]
    public required string Processor { get; init; }

    /// <summary>
    /// User-provided metadata stored with the run. Keys and values must be strings with a maximum length of 16 and 512 characters respectively.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata4? Metadata { get; init; }

    /// <summary>
    /// User-provided key identifying the memory scope to use. Omit to use personal memory, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memory_scope_key")]
    public MemoryScopeKey? MemoryScopeKey { get; init; }

    /// <summary>
    /// Optional source policy governing preferred and disallowed domains in web search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_policy")]
    public SourcePolicy1? SourcePolicy { get; init; }

    /// <summary>
    /// Advanced search configuration for the task run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advanced_settings")]
    public AdvancedSettingsParallelAiTasksApi? AdvancedSettings { get; init; }

    /// <summary>
    /// Task specification. If unspecified, defaults to auto output schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task_spec")]
    public TaskSpec1? TaskSpec { get; init; }

    /// <summary>
    /// Input to the task, either text or a JSON object.
    /// </summary>
    [JsonPropertyName("input")]
    public required InputParallelAiTasksApi Input { get; init; }

    /// <summary>
    /// Interaction ID to use as context for this request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_interaction_id")]
    public PreviousInteractionId? PreviousInteractionId { get; init; }

    /// <summary>
    /// Optional list of MCP servers to use for the run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mcp_servers")]
    public McpServersParallelAiTasksApi? McpServers { get; init; }

    /// <summary>
    /// Controls tracking of task run execution progress. When set to true, progress events are recorded and can be accessed via the <see href="https://docs.parallel.ai/api-reference">Task Run events</see> endpoint. When false, no progress events are tracked. Note that progress tracking cannot be enabled after a run has been created. The flag is set to true by default for premium processors (pro and above).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enable_events")]
    public EnableEvents? EnableEvents { get; init; }

    /// <summary>
    /// Callback URL (webhook endpoint) that will receive an HTTP POST when the run completes.
    /// This feature is not available via the Python SDK.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook")]
    public Webhook1? Webhook { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
