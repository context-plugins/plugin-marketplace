using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdvertisementOpportunitiesGetResponse
{
    /// <summary>
    /// A list of post templates available for this publication.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<AdvertisementOpportunity> Data { get; init; }

    /// <summary>
    /// The total number of results from all pages.
    /// </summary>
    [JsonPropertyName("total_results")]
    public required int TotalResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
