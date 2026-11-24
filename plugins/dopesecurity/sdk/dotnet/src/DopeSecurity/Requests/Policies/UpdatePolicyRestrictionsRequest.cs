using DopeSecurity.Models;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the UpdatePolicyRestrictions operation.
/// </summary>
public sealed record UpdatePolicyRestrictionsRequest
{
    /// <summary>
    /// The name of the policy to update restrictions for
    /// </summary>
    public required string PolicyName { get; init; }

    public required PolicyContentRestrictionsRequest Body { get; init; }
}
