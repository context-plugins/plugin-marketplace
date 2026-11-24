using AmazonLex.Models;

namespace AmazonLex.Requests.Policy;

/// <summary>
/// The inputs of the DeleteResourcePolicyStatement operation.
/// </summary>
public sealed record DeleteResourcePolicyStatementOperationRequest
{
    public required string ResourceArn { get; init; }

    public required string StatementId { get; init; }

    public DeleteResourcePolicyStatementRequest? Body { get; init; }
}
