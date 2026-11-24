using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Functions;

/// <summary>
/// The inputs of the CreateFunction operation.
/// </summary>
public sealed record CreateFunctionRequest
{
    /// <summary>
    /// The GraphQL API ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisFunctionsRequest? Body { get; init; }
}
