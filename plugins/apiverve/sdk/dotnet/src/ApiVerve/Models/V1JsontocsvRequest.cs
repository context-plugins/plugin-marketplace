using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1JsontocsvRequest
{
    /// <summary>
    /// The JSON array to convert to CSV (must be array of objects)
    /// </summary>
    [JsonPropertyName("json")]
    public required string Json { get; init; }

    /// <summary>
    /// The delimiter to use in the CSV
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delimiter")]
    public string? Delimiter { get; init; }

    /// <summary>
    /// Whether to include column headers in the output (default: true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include_header")]
    public bool? IncludeHeader { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
