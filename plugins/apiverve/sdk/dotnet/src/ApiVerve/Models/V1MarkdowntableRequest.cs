using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1MarkdowntableRequest
{
    /// <summary>
    /// Array of column header names
    /// </summary>
    [JsonPropertyName("headers")]
    public required string Headers { get; init; }

    /// <summary>
    /// Array of row arrays containing cell values
    /// </summary>
    [JsonPropertyName("rows")]
    public required string Rows { get; init; }

    /// <summary>
    /// Column alignment: left, center, right, or array of alignments per column
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alignment")]
    public string? Alignment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
