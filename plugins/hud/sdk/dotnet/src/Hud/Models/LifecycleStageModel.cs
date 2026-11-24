using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record LifecycleStageModel
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("label")]
    [StringLength(80, MinimumLength = 1)]
    public required string Label { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
