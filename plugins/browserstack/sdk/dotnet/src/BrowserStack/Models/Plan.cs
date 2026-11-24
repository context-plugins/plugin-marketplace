using System.Text.Json.Serialization;
using BrowserStack.Core.Models;

namespace BrowserStack.Models;

public record Plan
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("automate_plan")]
    public string? AutomatePlan { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parallel_sessions_running")]
    public int? ParallelSessionsRunning { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team_parallel_sessions_max_allowed")]
    public int? TeamParallelSessionsMaxAllowed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parallel_sessions_max_allowed")]
    public int? ParallelSessionsMaxAllowed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queued_sessions")]
    public int? QueuedSessions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queued_sessions_max_allowed")]
    public int? QueuedSessionsMaxAllowed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
