using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Apicaches;

/// <summary>
/// The inputs of the CreateApiCache operation.
/// </summary>
public sealed record CreateApiCacheRequest
{
    /// <summary>
    /// The GraphQL API ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisApiCachesRequest? Body { get; init; }
}
