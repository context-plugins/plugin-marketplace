using System.Text.Json.Serialization;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

public record AtifContentPart
{
    [JsonPropertyName("type")]
    public required TypeHudPlatformJobsApi Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public Text? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source11? Source { get; init; }
}
