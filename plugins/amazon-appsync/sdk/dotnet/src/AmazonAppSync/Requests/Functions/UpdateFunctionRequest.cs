using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Functions;

/// <summary>
/// The inputs of the UpdateFunction operation.
/// </summary>
public sealed record UpdateFunctionRequest
{
    /// <summary>
    /// The GraphQL API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The function ID.
    /// </summary>
    public required string FunctionId { get; init; }

    public V1ApisFunctionsRequest1? Body { get; init; }
}
