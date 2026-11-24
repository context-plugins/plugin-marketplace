using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1LinesorterRequest
{
    /// <summary>
    /// Array of text lines to sort (max 10,000)
    /// </summary>
    [JsonPropertyName("lines")]
    public required string Lines { get; init; }

    /// <summary>
    /// Sort order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public string? Order { get; init; }

    /// <summary>
    /// Enable case-sensitive sorting
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caseSensitive")]
    public bool? CaseSensitive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
