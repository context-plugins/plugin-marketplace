using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record ApiV1WatchlistsResponse
{
    [JsonPropertyName("watchlists")]
    public required IReadOnlyList<WatchlistSummary> Watchlists { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
