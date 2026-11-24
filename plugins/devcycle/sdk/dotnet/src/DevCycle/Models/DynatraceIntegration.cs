using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record DynatraceIntegration
{
    [JsonPropertyName("environments")]
    public required IReadOnlyList<DynatraceEnvironment> Environments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
