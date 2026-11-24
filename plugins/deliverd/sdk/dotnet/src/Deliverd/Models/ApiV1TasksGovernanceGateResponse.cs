using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1TasksGovernanceGateResponse
{
    [JsonPropertyName("allowed")]
    public required bool Allowed { get; init; }

    [JsonPropertyName("reason")]
    public required string Reason { get; init; }

    [JsonPropertyName("missingControls")]
    public required IReadOnlyList<string> MissingControls { get; init; }

    [JsonPropertyName("blockers")]
    public required IReadOnlyList<Blocker> Blockers { get; init; }

    [JsonPropertyName("scores")]
    public required IReadOnlyList<Score> Scores { get; init; }

    [JsonPropertyName("taskId")]
    public required Guid TaskId { get; init; }

    [JsonPropertyName("authority")]
    public required Authority? Authority { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
