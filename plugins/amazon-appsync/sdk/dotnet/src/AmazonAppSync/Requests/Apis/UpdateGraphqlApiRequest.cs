using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the UpdateGraphqlApi operation.
/// </summary>
public sealed record UpdateGraphqlApiRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisRequest1? Body { get; init; }
}
