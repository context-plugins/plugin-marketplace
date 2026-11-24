using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

public record MemoryEvictRequest
{
    /// <summary>
    /// User-provided key identifying the memory scope to use. Omit to use personal memory, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memory_scope_key")]
    public MemoryScopeKey? MemoryScopeKey { get; init; }

    /// <summary>
    /// Kind of source to evict: <c>task</c>, <c>monitor</c>, or <c>findall</c>.
    /// </summary>
    [JsonPropertyName("kind")]
    public required Kind3 Kind { get; init; }

    /// <summary>
    /// ID of the task run, monitor, or FindAll run to evict.
    /// </summary>
    [JsonPropertyName("id")]
    [StringLength(128, MinimumLength = 1)]
    [RegularExpression("^[a-zA-Z0-9_-]+$")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
