using System.ComponentModel.DataAnnotations;

namespace DopeSecurity.Requests.Policies;

/// <summary>
/// The inputs of the CreatePolicy operation.
/// </summary>
public sealed record CreatePolicyRequest
{
    /// <summary>
    /// The name of the policy to create
    /// </summary>
    [StringLength(32, MinimumLength = 1)]
    [RegularExpression("^[^#!@$%^*?./\\\\]+$")]
    public required string PolicyName { get; init; }
}
