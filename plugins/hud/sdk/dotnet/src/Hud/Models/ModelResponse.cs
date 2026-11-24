using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record ModelResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("model_name")]
    public required string ModelName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public NameHudPlatformJobsApi? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public Provider? Provider { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routes")]
    public IReadOnlyList<string>? Routes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_beta")]
    public bool? IsBeta { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hidden")]
    public bool? Hidden { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_trainable")]
    public bool? IsTrainable { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public bool? Public { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkpoint_count")]
    public CheckpointCount? CheckpointCount { get; init; }

    /// <summary>
    /// Lifetime platform-wide inference-call count. Null for signed-out callers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inference_count")]
    public InferenceCount? InferenceCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fork_of_model_id")]
    public ForkOfModelId? ForkOfModelId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fork_of_model_name")]
    public ForkOfModelName? ForkOfModelName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context_window")]
    public ContextWindow? ContextWindow { get; init; }

    [JsonPropertyName("sdk_agent_type")]
    public required string SdkAgentType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input_cost_per_token")]
    public InputCostPerToken? InputCostPerToken { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output_cost_per_token")]
    public OutputCostPerToken? OutputCostPerToken { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricing_config")]
    public object? PricingConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request_defaults")]
    public object? RequestDefaults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// Vendor-published release time. Null until an admin sets it; not catalog insert time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("released_at")]
    public ReleasedAt? ReleasedAt { get; init; }

    /// <summary>
    /// Vendor retirement time. Null = not deprecated. A future value announces the date; once it passes, the gateway rejects requests for the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deprecated_at")]
    public DeprecatedAt? DeprecatedAt { get; init; }

    /// <summary>
    /// Operator-set deprecation notice shown in the UI and returned on rejected requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deprecation_message")]
    public DeprecationMessage? DeprecationMessage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("can_edit")]
    public bool? CanEdit { get; init; } = false;

    /// <summary>
    /// Hosted rollout capacity, on serving global models in signed-in list responses. Null otherwise, or while no scheduler pass has run recently.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("capacity")]
    public Capacity? Capacity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
