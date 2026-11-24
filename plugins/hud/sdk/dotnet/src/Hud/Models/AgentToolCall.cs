using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// A tool invocation embedded inside an assistant message.
/// <para>
/// Distinct from ``ToolCallEvent``: this is the *intent* the agent surfaced
/// in its response, before the MCP call actually happened. The matching
/// ``ToolCallEvent`` carries the result.
/// </para>
/// </summary>
public record AgentToolCall
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tool_call_id")]
    public ToolCallId? ToolCallId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arguments")]
    public object? Arguments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subagent_event_id")]
    public SubagentEventId? SubagentEventId { get; init; }
}
