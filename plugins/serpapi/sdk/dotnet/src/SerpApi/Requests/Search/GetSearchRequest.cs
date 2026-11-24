namespace SerpApi.Requests.Search;

/// <summary>
/// The inputs of the GetSearch operation.
/// </summary>
public sealed record GetSearchRequest
{
    /// <summary>
    /// Identifier of the asynchronous search.
    /// </summary>
    public required string SearchId { get; init; }
}
