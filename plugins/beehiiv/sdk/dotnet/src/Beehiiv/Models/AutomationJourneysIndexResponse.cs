using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AutomationJourneysIndexResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<AutomationJourney> Data { get; init; }

    /// <summary>
    /// The limit placed on the results. If no limit was specified in the request, this defaults to 10.
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    /// <summary>
    /// The page number the results are from. If no page was specified in the request, this defaults to page 1.
    /// </summary>
    [JsonPropertyName("page")]
    public int Page { get; init; } = 1;

    /// <summary>
    /// The total number of results from all pages.
    /// </summary>
    [JsonPropertyName("total_results")]
    public required int TotalResults { get; init; }

    /// <summary>
    /// The total number of pages.
    /// </summary>
    [JsonPropertyName("total_pages")]
    public required int TotalPages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
