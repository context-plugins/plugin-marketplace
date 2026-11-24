using Perigon.Models;

namespace Perigon.Requests.Wikipedia;

/// <summary>
/// The inputs of the VectorSearchWikipedia operation.
/// </summary>
public sealed record VectorSearchWikipediaRequest
{
    public required WikipediaSearchParams Body { get; init; }
}
