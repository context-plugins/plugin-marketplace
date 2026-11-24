namespace AmazonAppSync.Requests.Operations;

/// <summary>
/// The inputs of the GetGraphqlApiEnvironmentVariables operation.
/// </summary>
public sealed record GetGraphqlApiEnvironmentVariablesRequest
{
    /// <summary>
    /// The ID of the API from which the environmental variable list will be retrieved.
    /// </summary>
    public required string ApiId { get; init; }
}
