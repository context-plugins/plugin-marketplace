namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the GetPolicyAssignments operation.
/// </summary>
public sealed record GetPolicyAssignmentsRequest
{
    /// <summary>
    /// The name of the policy to get assignments for
    /// </summary>
    public required string PolicyName { get; init; }
}
