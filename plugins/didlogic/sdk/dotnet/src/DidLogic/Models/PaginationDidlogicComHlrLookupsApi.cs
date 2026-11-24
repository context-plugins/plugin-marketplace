using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// Pagination metadata
/// </summary>
public record PaginationDidlogicComHlrLookupsApi
{
    /// <summary>
    /// Total number of items
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// Total number of pages
    /// </summary>
    [JsonPropertyName("total_pages")]
    public required int TotalPages { get; init; }

    /// <summary>
    /// Current page number
    /// </summary>
    [JsonPropertyName("current_page")]
    public required int CurrentPage { get; init; }

    /// <summary>
    /// Items per page
    /// </summary>
    [JsonPropertyName("per_page")]
    public required int PerPage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
