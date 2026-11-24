using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record DynatraceEnvironment
{
    [JsonPropertyName("dynatraceEnvironmentId")]
    public required string DynatraceEnvironmentId { get; init; }

    [JsonPropertyName("accessToken")]
    public required string AccessToken { get; init; }

    [JsonPropertyName("environmentUrl")]
    public required string EnvironmentUrl { get; init; }

    [JsonPropertyName("projects")]
    public required IReadOnlyList<Project> Projects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
