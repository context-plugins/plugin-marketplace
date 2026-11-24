using S1.Models;

namespace S1.Requests.Search;

/// <summary>
/// The inputs of the Ask operation.
/// </summary>
public sealed record AskOperationRequest
{
    public required AskRequest Body { get; init; }
}
