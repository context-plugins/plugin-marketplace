using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1JsonschemageneratorRequest
{
    /// <summary>
    /// The sample JSON data to generate a schema from
    /// </summary>
    [JsonPropertyName("json")]
    public required string Json { get; init; }

    /// <summary>
    /// The title for the generated schema (default: 'Generated Schema')
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Optional description for the schema
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
