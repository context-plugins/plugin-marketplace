using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record CompanyListPagination
{
    /// <summary>
    /// Page size (capped at 100 for <c>GET /companies</c>; up to 500 for <c>GET /companies/export</c>).
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    /// <summary>
    /// Total rows matching filters. May be <c>-1</c> when not computed (e.g. some cursor-based responses).
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }

    /// <summary>
    /// Last <c>entity_id</c> from this page; pass as <c>cursor</c> query param for the next page when supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursor")]
    public string? Cursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
