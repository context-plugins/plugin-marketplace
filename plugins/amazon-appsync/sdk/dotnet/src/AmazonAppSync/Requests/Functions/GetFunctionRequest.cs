namespace AmazonAppSync.Requests.Functions;

/// <summary>
/// The inputs of the GetFunction operation.
/// </summary>
public sealed record GetFunctionRequest
{
    /// <summary>
    /// The GraphQL API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The Function ID.
    /// </summary>
    public required string FunctionId { get; init; }
}
