using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Wire-compatible subset of ``hud.eval.runtime.RuntimeGPU``.
/// </summary>
public record SubmittedRuntimeGpu
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    [Minimum(1)]
    public int? Count { get; init; } = 1;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
