using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// A taskset the model has not been evaluated on yet.
/// </summary>
public record ModelSuggestedTaskset
{
    [JsonPropertyName("taskset_id")]
    public required Guid TasksetId { get; init; }

    [JsonPropertyName("taskset_name")]
    public required string TasksetName { get; init; }

    [JsonPropertyName("is_public")]
    public required bool IsPublic { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purpose")]
    public Purpose1? Purpose { get; init; }

    [JsonPropertyName("task_count")]
    public required int TaskCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public UpdatedAt? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
