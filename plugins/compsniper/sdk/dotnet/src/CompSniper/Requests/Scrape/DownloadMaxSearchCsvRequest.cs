using System;

namespace CompSniper.Requests.Scrape;

/// <summary>
/// The inputs of the DownloadMaxSearchCsv operation.
/// </summary>
public sealed record DownloadMaxSearchCsvRequest
{
    public required Guid JobId { get; init; }

    public required string Token { get; init; }
}
