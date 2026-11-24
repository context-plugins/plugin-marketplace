using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record AtifAgent
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model_name")]
    public ModelName? ModelName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tool_definitions")]
    public ToolDefinitions? ToolDefinitions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra")]
    public Extra? Extra { get; init; }
}
