namespace AmazonAppSync.Requests.Operations;

/// <summary>
/// The inputs of the FlushApiCache operation.
/// </summary>
public sealed record FlushApiCacheRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }
}
