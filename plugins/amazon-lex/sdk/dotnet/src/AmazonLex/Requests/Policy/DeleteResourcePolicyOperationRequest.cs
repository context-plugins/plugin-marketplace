using AmazonLex.Models;

namespace AmazonLex.Requests.Policy;

/// <summary>
/// The inputs of the DeleteResourcePolicy operation.
/// </summary>
public sealed record DeleteResourcePolicyOperationRequest
{
    public required string ResourceArn { get; init; }

    public DeleteResourcePolicyRequest? Body { get; init; }
}
