using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Cursor-based pagination metadata.
/// </summary>
public record PaginationModel
{
    /// <summary>
    /// Token to retrieve the next page. Absent when there are no more pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Number of items in this page.
    /// </summary>
    [JsonPropertyName("rowCount")]
    public required int RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
