using Search1Api.Models;

namespace Search1Api.Requests.Search;

/// <summary>
/// The inputs of the Ask operation.
/// </summary>
public sealed record AskOperationRequest
{
    public required AskRequest Body { get; init; }
}
