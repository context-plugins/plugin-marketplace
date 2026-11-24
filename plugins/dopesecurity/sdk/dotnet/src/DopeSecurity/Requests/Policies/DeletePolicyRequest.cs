namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the DeletePolicy operation.
/// </summary>
public sealed record DeletePolicyRequest
{
    /// <summary>
    /// The name of the policy to delete
    /// </summary>
    public required string PolicyName { get; init; }
}
