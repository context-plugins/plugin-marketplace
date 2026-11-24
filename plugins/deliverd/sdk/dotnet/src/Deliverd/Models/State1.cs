using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record State1
{
    [JsonPropertyName("currentState")]
    public required string? CurrentState { get; init; }

    [JsonPropertyName("openQuestions")]
    public required IReadOnlyList<string> OpenQuestions { get; init; }

    [JsonPropertyName("constraints")]
    public required IReadOnlyList<string> Constraints { get; init; }

    [JsonPropertyName("blockedBy")]
    public required IReadOnlyList<string> BlockedBy { get; init; }

    [JsonPropertyName("nextAction")]
    public required string? NextAction { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
