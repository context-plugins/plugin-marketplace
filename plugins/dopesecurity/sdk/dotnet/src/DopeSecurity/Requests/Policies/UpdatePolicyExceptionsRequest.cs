using DopeSecurity.Models;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the UpdatePolicyExceptions operation.
/// </summary>
public sealed record UpdatePolicyExceptionsRequest
{
    /// <summary>
    /// The name of the policy to update exceptions for
    /// </summary>
    public required string PolicyName { get; init; }

    public required PolicyContentExceptionsRequest Body { get; init; }
}
