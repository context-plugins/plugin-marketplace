namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the DeleteGraphqlApi operation.
/// </summary>
public sealed record DeleteGraphqlApiRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }
}
