using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// A nested-agent invocation (one ``AgentTool.__call__``).
/// </summary>
public record SubagentEvent
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_id")]
    public ParentId? ParentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at")]
    public StartedAt? StartedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ended_at")]
    public EndedAt? EndedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seq")]
    public int? Seq { get; init; } = 0;

    [JsonPropertyName("kind")]
    public string Kind { get; } = "subagent";

    [JsonPropertyName("agent_name")]
    public required string AgentName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arguments")]
    public object? Arguments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public Result1? Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
