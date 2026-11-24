namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the GetGraphqlApi operation.
/// </summary>
public sealed record GetGraphqlApiRequest
{
    /// <summary>
    /// The API ID for the GraphQL API.
    /// </summary>
    public required string ApiId { get; init; }
}
