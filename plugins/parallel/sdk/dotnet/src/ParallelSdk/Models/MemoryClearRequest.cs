using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

public record MemoryClearRequest
{
    /// <summary>
    /// User-provided key identifying the memory scope to use. Omit to use personal memory, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memory_scope_key")]
    public MemoryScopeKey? MemoryScopeKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
