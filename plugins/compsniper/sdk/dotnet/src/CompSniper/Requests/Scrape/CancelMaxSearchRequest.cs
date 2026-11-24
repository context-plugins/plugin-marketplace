using System;

namespace CompSniper.Requests.Scrape;

/// <summary>
/// The inputs of the CancelMaxSearch operation.
/// </summary>
public sealed record CancelMaxSearchRequest
{
    public required Guid JobId { get; init; }
}
