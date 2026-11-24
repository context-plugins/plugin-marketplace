using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ResultsWithProjectData
{
    [JsonPropertyName("evaluations")]
    public required IReadOnlyList<ProjectDataPoint> Evaluations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
