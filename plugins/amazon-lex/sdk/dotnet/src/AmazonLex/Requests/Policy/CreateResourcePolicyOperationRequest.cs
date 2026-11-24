using AmazonLex.Models;

namespace AmazonLex.Requests.Policy;

/// <summary>
/// The inputs of the CreateResourcePolicy operation.
/// </summary>
public sealed record CreateResourcePolicyOperationRequest
{
    public required string ResourceArn { get; init; }

    public CreateResourcePolicyRequest? Body { get; init; }
}
