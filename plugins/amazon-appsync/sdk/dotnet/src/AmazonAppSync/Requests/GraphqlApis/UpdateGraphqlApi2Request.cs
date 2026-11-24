using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.GraphqlApis;

/// <summary>
/// The inputs of the UpdateGraphqlApi2 operation.
/// </summary>
public sealed record UpdateGraphqlApi2Request
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisRequest1? Body { get; init; }
}
