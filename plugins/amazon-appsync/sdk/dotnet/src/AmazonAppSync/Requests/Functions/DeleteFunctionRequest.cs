namespace AmazonAppSync.Requests.Functions;

/// <summary>
/// The inputs of the DeleteFunction operation.
/// </summary>
public sealed record DeleteFunctionRequest
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
