using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;

namespace Hud.Models;

/// <summary>
/// ``evaluated_trace_ids`` is the K traces actually scored.
/// <para>
/// ``candidate_count`` is the total eligible pool. When ``candidate_count &lt; k``
/// the count check fails and per-K checks score whatever candidates exist.
/// </para>
/// </summary>
public record ReadyRequirementsEvaluation
{
    [JsonPropertyName("passed")]
    public required bool Passed { get; init; }

    [JsonPropertyName("k")]
    [Minimum(0)]
    public required int K { get; init; }

    [JsonPropertyName("candidate_count")]
    [Minimum(0)]
    public required int CandidateCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evaluated_trace_ids")]
    public IReadOnlyList<string>? EvaluatedTraceIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requirements_version")]
    public int? RequirementsVersion { get; init; } = 1;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checks")]
    public IReadOnlyList<RequirementCheck>? Checks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("can_override")]
    public bool? CanOverride { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_requirements")]
    public bool? HasRequirements { get; init; } = true;

    [JsonPropertyName("evaluated_at")]
    public required DateTimeOffset EvaluatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
