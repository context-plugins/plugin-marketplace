namespace AmazonAppSync.Requests.Apicaches;

/// <summary>
/// The inputs of the GetApiCache operation.
/// </summary>
public sealed record GetApiCacheRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }
}
