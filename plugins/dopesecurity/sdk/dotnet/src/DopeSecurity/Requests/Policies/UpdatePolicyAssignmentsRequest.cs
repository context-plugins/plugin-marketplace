using DopeSecurity.Models;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the UpdatePolicyAssignments operation.
/// </summary>
public sealed record UpdatePolicyAssignmentsRequest
{
    /// <summary>
    /// The name of the policy to update assignments for
    /// </summary>
    public required string PolicyName { get; init; }

    public required PoliciesAssignmentsRequest Body { get; init; }
}
