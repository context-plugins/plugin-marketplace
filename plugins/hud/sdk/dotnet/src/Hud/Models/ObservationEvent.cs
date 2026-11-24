using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One robot observation tick (``step.observation`` under ``hud.robot.step.v1``):
/// <para>
/// the numeric state the policy saw at ``tick`` (camera frames travel as
/// ``VideoSegmentEvent`` streams).
/// </para>
/// <para>
/// ``state`` maps each env-contract feature group -&gt; its :class:`StateFeature`
/// (per-dim names + values). Pairs with the :class:<c>InferenceEvent</c> at the
/// same ``tick``.
/// </para>
/// </summary>
public record ObservationEvent
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_id")]
    public ParentId? ParentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at")]
    public StartedAt? StartedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ended_at")]
    public EndedAt? EndedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seq")]
    public int? Seq { get; init; } = 0;

    [JsonPropertyName("kind")]
    public string Kind { get; } = "robot_observation";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tick")]
    public int? Tick { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public IReadOnlyDictionary<string, StateFeature>? State { get; init; }
}
