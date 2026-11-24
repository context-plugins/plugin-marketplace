using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Trace counts over the whole job.
/// <para>
/// Invalidated traces count only toward ``invalidated``. ``running`` includes traces
/// that are still cancelling, and ``queued`` is pending or initializing. ``scored``
/// and ``unscored`` split every terminal non-error trace by whether it has a reward.
/// </para>
/// </summary>
public record JobTraceSummary
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public int? Total { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("running")]
    public int? Running { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queued")]
    public int? Queued { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public int? Error { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scored")]
    public int? Scored { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unscored")]
    public int? Unscored { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invalidated")]
    public int? Invalidated { get; init; } = 0;

    /// <summary>
    /// Scored rewards, clamped to [0, 1], counted in equal-width buckets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reward_histogram")]
    public IReadOnlyList<int>? RewardHistogram { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
