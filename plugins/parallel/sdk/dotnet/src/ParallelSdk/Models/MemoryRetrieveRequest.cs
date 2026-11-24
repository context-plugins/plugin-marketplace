using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Core.Validation.Attributes;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

public record MemoryRetrieveRequest
{
    /// <summary>
    /// Concise query describing the memories to retrieve. Empty queries return the most recent memories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public Query? Query { get; init; }

    /// <summary>
    /// Maximum number of memories to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(25)]
    public int? Limit { get; init; } = 10;

    /// <summary>
    /// Filter memories by kind: <c>task</c>, <c>monitor</c>, or <c>findall</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind5? Kind { get; init; }

    /// <summary>
    /// Only return memories sourced from task, monitor, or FindAll runs completed at or after this RFC 3339 timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("since")]
    public Since? Since { get; init; }

    /// <summary>
    /// User-provided key identifying the memory scope to use. Omit to use personal memory, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memory_scope_key")]
    public MemoryScopeKey? MemoryScopeKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
