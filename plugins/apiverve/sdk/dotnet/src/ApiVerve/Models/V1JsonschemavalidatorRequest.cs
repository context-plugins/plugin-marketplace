using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1JsonschemavalidatorRequest
{
    /// <summary>
    /// The JSON Schema to validate against
    /// </summary>
    [JsonPropertyName("schema")]
    public required string Schema { get; init; }

    /// <summary>
    /// The JSON data to validate. An empty object is a valid document and is accepted.
    /// </summary>
    [JsonPropertyName("json")]
    public required string Json { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
