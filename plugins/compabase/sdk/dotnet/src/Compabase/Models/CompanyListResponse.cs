using System.Collections.Generic;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

/// <summary>
/// Search/list response. <c>data</c> is an array of companies.
/// </summary>
public record CompanyListResponse
{
    /// <summary>
    /// One page of result rows (same filters as the request); length ≤ <c>pagination.limit</c>.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<CompanyListItem> Data { get; init; }

    [JsonPropertyName("pagination")]
    public required CompanyListPagination Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
