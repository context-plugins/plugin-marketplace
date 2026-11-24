using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Core.Validation.Attributes;

namespace Apibara.Models;

/// <summary>
/// Cursor pagination metadata.
/// </summary>
public record CursorMeta
{
    [JsonPropertyName("per_page")]
    [Minimum(1)]
    [Maximum(100)]
    public required int PerPage { get; init; }

    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonPropertyName("prev_cursor")]
    public required string? PrevCursor { get; init; }

    /// <summary>
    /// True when next_cursor is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_more")]
    public bool? HasMore { get; init; }

    /// <summary>
    /// Exact filtered row count when include_total=true; otherwise null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    [Minimum(0)]
    public int? Total { get; init; }

    /// <summary>
    /// True when total was requested and computed exactly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_is_exact")]
    public bool? TotalIsExact { get; init; }

    /// <summary>
    /// Normalized/requested filters applied to this list query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applied_filters")]
    public object? AppliedFilters { get; init; }

    /// <summary>
    /// Unrecognized query keys. Non-empty means the client sent parameters outside the supported contract.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unknown_filters")]
    public IReadOnlyList<string>? UnknownFilters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
