namespace NordicFinancialNews.Requests.StoriesApi;

/// <summary>
/// The inputs of the GetApiV1StoriesById operation.
/// </summary>
public sealed record GetApiV1StoriesByIdRequest
{
    /// <summary>
    /// Story ID (e.g. <c>sty_abc123def</c>).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if the story has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }
}
