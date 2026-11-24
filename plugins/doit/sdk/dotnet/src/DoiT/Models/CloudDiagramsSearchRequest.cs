using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// Request body for searching diagrams and components.
/// </summary>
public record CloudDiagramsSearchRequest
{
    /// <summary>
    /// Search query string.
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// Limit search to components within this layer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ss_id")]
    public string? SsId { get; init; }

    /// <summary>
    /// Pagination offset (default 0).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    [Minimum(0)]
    public int? From { get; init; }

    /// <summary>
    /// Maximum number of results per category (default 20).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    [Minimum(1)]
    public int? Size { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
