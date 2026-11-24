using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Models.Enums;

namespace Statable.Models;

/// <summary>
/// One step of a funnel definition. <c>kind</c> selects which other fields apply.
/// </summary>
public record FunnelStep
{
    [JsonPropertyName("kind")]
    public required Kind Kind { get; init; }

    /// <summary>
    /// URL path — for kind page/entry_page/exit_page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// Path match operator (e|b|c|r) — for kind page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operator")]
    public string? Operator { get; init; }

    /// <summary>
    /// Custom event name — for kind event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event")]
    public string? Event { get; init; }

    /// <summary>
    /// Optional custom-property key — for kind event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prop_key")]
    public string? PropKey { get; init; }

    /// <summary>
    /// Optional custom-property value — for kind event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prop_value")]
    public string? PropValue { get; init; }

    /// <summary>
    /// Goal id — for kind goal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("goal_id")]
    public long? GoalId { get; init; }

    /// <summary>
    /// Scroll depth 0..100 — for kind scroll.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("threshold")]
    public int? Threshold { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
