using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One robot inference (``step.inference`` under ``hud.robot.step.v1``).
/// <para>
/// Carries the ``[T, A]`` action chunk the policy produced at a re-infer
/// ``tick``.
/// </para>
/// <para>
/// Emitted only on re-infer ticks (a chunk boundary), so it marks the
/// decision points the viewer renders on its episode slider. ``tick`` matches
/// the paired :class:<c>ObservationEvent</c>.
/// </para>
/// </summary>
public record InferenceEvent
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
    public string Kind { get; } = "robot_inference";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tick")]
    public int? Tick { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chunk")]
    public IReadOnlyList<IReadOnlyList<double>>? Chunk { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chunk_length")]
    public int? ChunkLength { get; init; } = 1;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("names")]
    public IReadOnlyList<string>? Names { get; init; }
}
