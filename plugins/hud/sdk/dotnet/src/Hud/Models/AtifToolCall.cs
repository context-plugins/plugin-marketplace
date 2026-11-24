using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record AtifToolCall
{
    [JsonPropertyName("tool_call_id")]
    public required string ToolCallId { get; init; }

    [JsonPropertyName("function_name")]
    public required string FunctionName { get; init; }

    [JsonPropertyName("arguments")]
    public required object Arguments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra")]
    public Extra? Extra { get; init; }
}
