using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One node in a model's training-checkpoint tree.
/// <para>
/// ``id`` is the ``model_checkpoints`` node id (what the tree keys + links on via
/// ``prev_model_checkpoint_id``). ``checkpoint_name`` is the served sampler path.
/// </para>
/// </summary>
public record CheckpointResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public NameHudPlatformJobsApi? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkpoint_name")]
    public CheckpointName? CheckpointName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prev_model_checkpoint_id")]
    public PrevModelCheckpointId? PrevModelCheckpointId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_active")]
    public bool? IsActive { get; init; } = false;

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_traces")]
    public NumTraces? NumTraces { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_datums")]
    public NumDatums? NumDatums { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_tokens")]
    public NumTokens? NumTokens { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mean_reward")]
    public MeanReward? MeanReward { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("learning_rate")]
    public LearningRate? LearningRate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loss_fn")]
    public LossFn? LossFn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyDictionary<string, double>? Metrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobs")]
    public IReadOnlyList<CheckpointRef>? Jobs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasksets")]
    public IReadOnlyList<CheckpointRef>? Tasksets { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("session_id")]
    public SessionIdHudPlatformModelsApi? SessionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("session_name")]
    public SessionName? SessionName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reward_groups")]
    public IReadOnlyList<IReadOnlyList<double>>? RewardGroups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
