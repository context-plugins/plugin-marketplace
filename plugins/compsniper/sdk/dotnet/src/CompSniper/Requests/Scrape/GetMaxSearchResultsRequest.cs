using System;

namespace CompSniper.Requests.Scrape;

/// <summary>
/// The inputs of the GetMaxSearchResults operation.
/// </summary>
public sealed record GetMaxSearchResultsRequest
{
    public required Guid JobId { get; init; }
}
