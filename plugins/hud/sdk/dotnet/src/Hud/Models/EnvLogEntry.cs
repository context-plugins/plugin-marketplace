using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// A single line of container output.
/// </summary>
public record EnvLogEntry
{
    [JsonPropertyName("stream")]
    public required string Stream { get; init; }

    [JsonPropertyName("log")]
    public required string Log { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time")]
    public Time? Time { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
