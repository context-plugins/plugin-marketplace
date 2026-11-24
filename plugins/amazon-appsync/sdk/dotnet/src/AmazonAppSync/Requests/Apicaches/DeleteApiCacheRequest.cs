namespace AmazonAppSync.Requests.Apicaches;

/// <summary>
/// The inputs of the DeleteApiCache operation.
/// </summary>
public sealed record DeleteApiCacheRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }
}
