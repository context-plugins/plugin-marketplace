using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Requests.Batch;

/// <summary>
/// The inputs of the BatchLookup operation.
/// </summary>
public sealed record BatchLookupRequest
{
    public required BatchRequest Body { get; init; }
}
