using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record ActiveInstancesResponse
{
    [JsonPropertyName("instances")]
    public required IReadOnlyList<ActiveInstance> Instances { get; init; }

    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("running_count")]
    public required int RunningCount { get; init; }

    [JsonPropertyName("terminated_count")]
    public required int TerminatedCount { get; init; }

    [JsonPropertyName("has_more")]
    public required bool HasMore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
