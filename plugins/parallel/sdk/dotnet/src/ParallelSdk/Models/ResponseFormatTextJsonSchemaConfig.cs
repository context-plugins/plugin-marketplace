using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// JSON Schema output format: the response's output text conforms to <c>schema</c>.
/// </summary>
public record ResponseFormatTextJsonSchemaConfig
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("schema")]
    public required object Schema { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "json_schema";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("strict")]
    public Strict? Strict { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
