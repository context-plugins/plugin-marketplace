using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PodcastShowsListResponse
{
    /// <summary>
    /// A list of podcasts for this publication.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<PodcastShow> Data { get; init; }

    /// <summary>
    /// The limit placed on the results. If no limit was specified in the request, this defaults to 10.
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    /// <summary>
    /// Indicates whether there are more results available after the current page.
    /// </summary>
    [JsonPropertyName("has_more")]
    public required bool HasMore { get; init; }

    /// <summary>
    /// The cursor token to use for fetching the next page of results. Null when has_more is false.
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
