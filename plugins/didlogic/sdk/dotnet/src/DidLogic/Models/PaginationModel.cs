using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Core.Validation.Attributes;

namespace DidLogic.Models;

/// <summary>
/// Pagination metadata for list responses
/// </summary>
public record PaginationModel
{
    /// <summary>
    /// Current page number (1-based)
    /// </summary>
    [JsonPropertyName("page")]
    [Minimum(1)]
    public required int Page { get; init; }

    /// <summary>
    /// Number of records per page
    /// </summary>
    [JsonPropertyName("per_page")]
    [Minimum(1)]
    public required int PerPage { get; init; }

    /// <summary>
    /// Total number of pages available
    /// </summary>
    [JsonPropertyName("total_pages")]
    [Minimum(0)]
    public required int TotalPages { get; init; }

    /// <summary>
    /// Total number of records
    /// </summary>
    [JsonPropertyName("total_records")]
    [Minimum(0)]
    public required int TotalRecords { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
