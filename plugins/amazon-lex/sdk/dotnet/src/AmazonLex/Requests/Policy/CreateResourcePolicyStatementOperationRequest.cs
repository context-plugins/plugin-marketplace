using AmazonLex.Models;

namespace AmazonLex.Requests.Policy;

/// <summary>
/// The inputs of the CreateResourcePolicyStatement operation.
/// </summary>
public sealed record CreateResourcePolicyStatementOperationRequest
{
    public required string ResourceArn { get; init; }

    public CreateResourcePolicyStatementRequest? Body { get; init; }
}
