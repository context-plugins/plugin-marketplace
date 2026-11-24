using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Sentinel for "no config on the taskset".
/// <para>
/// Discriminated by ``has_requirements`` so the UI can hide the REQUIREMENTS
/// section entirely vs. render an empty card.
/// </para>
/// </summary>
public record ReadyRequirementsNotConfigured
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("passed")]
    public bool? Passed { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_requirements")]
    public bool? HasRequirements { get; init; } = false;

    [JsonPropertyName("evaluated_at")]
    public required DateTimeOffset EvaluatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
