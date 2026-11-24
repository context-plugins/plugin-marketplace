namespace DoiT.Requests.Folders;

/// <summary>
/// The inputs of the ListFolders operation.
/// </summary>
public sealed record ListFoldersRequest
{
    /// <summary>
    /// The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.
    /// </summary>
    public long MaxResults { get; init; } = 50L;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
