using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1DatamaskingRequest
{
    /// <summary>
    /// The text containing sensitive data to mask
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// Array of data types to mask (default: all types)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("types")]
    public string? Types { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
