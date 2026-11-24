using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Hosted rollout capacity of a catalog model's scheduler group, from the last pass.
/// <para>
/// Models in one scheduler group report the same values.
/// </para>
/// </summary>
public record ModelCapacity
{
    /// <summary>
    /// No new hosted rollouts start on the model.
    /// </summary>
    [JsonPropertyName("paused")]
    public required bool Paused { get; init; }

    /// <summary>
    /// Hosted rollouts currently holding this model group's pooled capacity.
    /// </summary>
    [JsonPropertyName("current_rollouts")]
    [Minimum(0)]
    public required int CurrentRollouts { get; init; }

    /// <summary>
    /// Current rollouts plus the additional pooled rollouts the last scheduler pass allowed after model, provider, and quota gates. Null when that pass did not plan the group because it had no queued or scheduler-launched rollouts.
    /// </summary>
    [JsonPropertyName("effective_max_rollouts")]
    public required EffectiveMaxRollouts EffectiveMaxRollouts { get; init; }

    /// <summary>
    /// Current rollouts divided by effective max rollouts; 0 with none running.
    /// </summary>
    [JsonPropertyName("utilization")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Utilization { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
