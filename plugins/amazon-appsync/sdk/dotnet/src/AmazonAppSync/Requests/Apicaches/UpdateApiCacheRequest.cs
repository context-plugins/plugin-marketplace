using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Apicaches;

/// <summary>
/// The inputs of the UpdateApiCache operation.
/// </summary>
public sealed record UpdateApiCacheRequest
{
    /// <summary>
    /// The GraphQL API ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisApiCachesUpdateRequest? Body { get; init; }
}
