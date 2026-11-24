using System.ComponentModel.DataAnnotations;

namespace DoiT.Requests.Signup;

/// <summary>
/// The inputs of the GetSignupRequest operation.
/// </summary>
public sealed record GetSignupRequest
{
    /// <summary>
    /// Public signup request id (sr_ prefix).
    /// </summary>
    [RegularExpression("^sr_[0-9a-f]{32}$")]
    public required string SignupRequestId { get; init; }
}
