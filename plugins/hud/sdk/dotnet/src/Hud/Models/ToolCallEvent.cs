using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// A single MCP tool call with its result merged in.
/// <para>
/// Mirrors what FastMCP returns: ``result_data`` preserves
/// ``structuredContent`` when present; otherwise text content is unwrapped
/// into ``result_text`` so renderers don't have to dig.
/// </para>
/// </summary>
public record ToolCallEvent
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
    public string Kind { get; } = "tool_call";

    [JsonPropertyName("method")]
    public required string Method { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tool_call_id")]
    public ToolCallId? ToolCallId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tool_name")]
    public ToolName? ToolName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arguments")]
    public object? Arguments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result_text")]
    public ResultText? ResultText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result_data")]
    public ResultData? ResultData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_screenshot")]
    public bool? IsScreenshot { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenshot_url")]
    public ScreenshotUrl? ScreenshotUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenshot_urls")]
    public IReadOnlyList<string>? ScreenshotUrls { get; init; }
}
