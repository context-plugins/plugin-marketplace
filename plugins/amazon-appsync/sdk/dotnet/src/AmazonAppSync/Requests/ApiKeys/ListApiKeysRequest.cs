namespace AmazonAppSync.Requests.ApiKeys;

/// <summary>
/// The inputs of the ListApiKeys operation.
/// </summary>
public sealed record ListApiKeysRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
    /// </summary>
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of results that you want the request to return.
    /// </summary>
    public int? MaxResults { get; init; }
}
