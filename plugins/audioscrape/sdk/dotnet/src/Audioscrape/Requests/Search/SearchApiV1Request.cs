using Audioscrape.Models;

namespace Audioscrape.Requests.Search;

/// <summary>
/// The inputs of the SearchApiV1 operation.
/// </summary>
public sealed record SearchApiV1Request
{
    public required SearchRequest Body { get; init; }
}
