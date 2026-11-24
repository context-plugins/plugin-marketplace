using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// One requirement check result with pre-formatted display strings.
/// <para>
/// ``required`` and ``current`` are pre-formatted strings — the UI renders
/// them verbatim to avoid format drift between flyout / dialog / audit views.
/// ``key`` is open (QA checks use ``qa.&lt;agent_id&gt;``).
/// </para>
/// </summary>
public record RequirementCheck
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("passed")]
    public required bool Passed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public SeverityHudPlatformTasksApi? Severity { get; init; } = SeverityHudPlatformTasksApi.Error;

    [JsonPropertyName("required")]
    public required string Required { get; init; }

    [JsonPropertyName("current")]
    public required string Current { get; init; }

    [JsonPropertyName("how_to_fix")]
    public required string HowToFix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offending_trace_ids")]
    public IReadOnlyList<string>? OffendingTraceIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
