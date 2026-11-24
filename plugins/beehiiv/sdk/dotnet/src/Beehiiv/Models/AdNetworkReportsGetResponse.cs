using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdNetworkReportsGetResponse
{
    /// <summary>
    /// Advertisement performance and payment reports for the publication.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<AdNetworkReport> Data { get; init; }

    /// <summary>
    /// The maximum number of reports returned.
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    /// <summary>
    /// The page number returned.
    /// </summary>
    [JsonPropertyName("page")]
    public required int Page { get; init; }

    /// <summary>
    /// The total number of reports.
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
