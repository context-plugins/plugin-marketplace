using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the UpdateApi operation.
/// </summary>
public sealed record UpdateApiRequest
{
    /// <summary>
    /// The Api ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V2ApisRequest1? Body { get; init; }
}
