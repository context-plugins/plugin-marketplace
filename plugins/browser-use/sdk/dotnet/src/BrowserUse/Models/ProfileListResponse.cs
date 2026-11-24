using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Response model for paginated profile list requests.
/// </summary>
public record ProfileListResponse
{
    /// <summary>
    /// List of profile views for the current page
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<ProfileView> Items { get; init; }

    /// <summary>
    /// Total number of items in the list
    /// </summary>
    [JsonPropertyName("totalItems")]
    public required int TotalItems { get; init; }

    /// <summary>
    /// Page number
    /// </summary>
    [JsonPropertyName("pageNumber")]
    public required int PageNumber { get; init; }

    /// <summary>
    /// Number of items per page
    /// </summary>
    [JsonPropertyName("pageSize")]
    public required int PageSize { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
