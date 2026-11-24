using AmazonLex.Models;

namespace AmazonLex.Requests.Policy;

/// <summary>
/// The inputs of the UpdateResourcePolicy operation.
/// </summary>
public sealed record UpdateResourcePolicyOperationRequest
{
    public required string ResourceArn { get; init; }

    public UpdateResourcePolicyRequest? Body { get; init; }
}
