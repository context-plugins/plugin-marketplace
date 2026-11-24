using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// JSON schema for a task input or output.
/// </summary>
public record JsonSchemaParallelAiFindAllApi
{
    /// <summary>
    /// A JSON Schema object. Only a subset of JSON Schema is supported.
    /// </summary>
    [JsonPropertyName("json_schema")]
    public required object JsonSchema { get; init; }

    /// <summary>
    /// The type of schema being defined. Always <c>json</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeParallelAiFindAllApi? Type { get; init; } = TypeParallelAiFindAllApi.Json;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
