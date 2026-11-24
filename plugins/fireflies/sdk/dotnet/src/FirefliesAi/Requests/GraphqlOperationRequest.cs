using FirefliesAi.Models;

namespace FirefliesAi.Requests;

/// <summary>
/// The inputs of the GraphqlOperation operation.
/// </summary>
public sealed record GraphqlOperationRequest
{
    public required GraphQlRequest Body { get; init; }
}
