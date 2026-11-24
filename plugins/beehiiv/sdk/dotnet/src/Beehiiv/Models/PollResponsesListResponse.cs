using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PollResponsesListResponse
{
    /// <summary>
    /// An array of poll responses.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<PollResponseItem> Data { get; init; }

    /// <summary>
    /// The limit placed on the results. If no limit was specified in the request, this defaults to 10.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    /// <summary>
    /// <b>Offset pagination only</b>: The page number the results are from. Only present when using deprecated offset-based pagination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public int? Page { get; init; } = 1;

    /// <summary>
    /// <b>Offset pagination only</b>: The total number of pages. Only present when using deprecated offset-based pagination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_pages")]
    public int? TotalPages { get; init; }

    /// <summary>
    /// <b>Cursor pagination only</b>: Indicates whether there are more results available after the current page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_more")]
    public bool? HasMore { get; init; }

    /// <summary>
    /// <b>Cursor pagination only</b>: The cursor token to use for fetching the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_cursor")]
    public string? NextCursor { get; init; }

    /// <summary>
    /// The total number of results from all pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_results")]
    public int? TotalResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
