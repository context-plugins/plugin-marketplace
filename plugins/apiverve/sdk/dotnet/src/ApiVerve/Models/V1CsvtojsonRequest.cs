using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1CsvtojsonRequest
{
    /// <summary>
    /// The CSV data to convert to JSON
    /// </summary>
    [JsonPropertyName("csv")]
    public required string Csv { get; init; }

    /// <summary>
    /// The delimiter used in the CSV
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delimiter")]
    public string? Delimiter { get; init; }

    /// <summary>
    /// Whether the first row contains column headers (default: true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_header")]
    public bool? HasHeader { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
