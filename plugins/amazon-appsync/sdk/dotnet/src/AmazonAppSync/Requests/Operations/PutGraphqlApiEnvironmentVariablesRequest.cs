using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Operations;

/// <summary>
/// The inputs of the PutGraphqlApiEnvironmentVariables operation.
/// </summary>
public sealed record PutGraphqlApiEnvironmentVariablesRequest
{
    /// <summary>
    /// The ID of the API to which the environmental variable list will be written.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisEnvironmentVariablesRequest? Body { get; init; }
}
