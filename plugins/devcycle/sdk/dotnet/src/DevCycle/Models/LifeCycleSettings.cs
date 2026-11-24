using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record LifeCycleSettings
{
    [JsonPropertyName("disableCodeRefChecks")]
    public required bool DisableCodeRefChecks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
