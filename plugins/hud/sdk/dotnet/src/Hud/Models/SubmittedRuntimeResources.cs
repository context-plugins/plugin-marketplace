using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Wire-compatible subset of ``hud.eval.runtime.RuntimeResources``.
/// <para>
/// Hosted runtimes run Linux, so ``os`` accepts only ``linux`` in any case.
/// </para>
/// </summary>
public record SubmittedRuntimeResources
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cpu")]
    public Cpu? Cpu { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memory_mb")]
    public MemoryMb? MemoryMb { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("storage_mb")]
    public StorageMb? StorageMb { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gpu")]
    public Gpu? Gpu { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("os")]
    public Os? Os { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
