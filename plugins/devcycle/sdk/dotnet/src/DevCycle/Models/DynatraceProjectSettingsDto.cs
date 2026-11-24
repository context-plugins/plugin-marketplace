using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record DynatraceProjectSettingsDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentMap")]
    public object? EnvironmentMap { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
