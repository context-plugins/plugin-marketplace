namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the GetPolicyContent operation.
/// </summary>
public sealed record GetPolicyContentRequest
{
    /// <summary>
    /// The name of the policy to retrieve content for
    /// </summary>
    public required string PolicyName { get; init; }
}
