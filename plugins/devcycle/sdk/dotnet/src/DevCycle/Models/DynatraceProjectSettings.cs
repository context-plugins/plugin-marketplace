using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record DynatraceProjectSettings
{
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("environmentMap")]
    public required object EnvironmentMap { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
