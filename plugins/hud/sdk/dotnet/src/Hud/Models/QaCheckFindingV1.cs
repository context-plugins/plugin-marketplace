using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// One actionable issue a QA check identified.
/// </summary>
public record QaCheckFindingV1
{
    [JsonPropertyName("finding_type")]
    public required string FindingType { get; init; }

    [JsonPropertyName("severity")]
    public required Severity Severity { get; init; }

    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidence")]
    public Confidence? Confidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evidence_refs")]
    public IReadOnlyList<string>? EvidenceRefs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommended_action")]
    public RecommendedAction? RecommendedAction { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }
}
