namespace AmazonAppSync.Requests.GraphqlApis;

/// <summary>
/// The inputs of the DeleteGraphqlApi2 operation.
/// </summary>
public sealed record DeleteGraphqlApi2Request
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }
}
