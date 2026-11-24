namespace AmazonAppSync.Requests.GraphqlApis;

/// <summary>
/// The inputs of the GetGraphqlApi2 operation.
/// </summary>
public sealed record GetGraphqlApi2Request
{
    /// <summary>
    /// The API ID for the GraphQL API.
    /// </summary>
    public required string ApiId { get; init; }
}
