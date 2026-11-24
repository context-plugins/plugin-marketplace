using System.ComponentModel.DataAnnotations;
using DoiT.Models;

namespace DoiT.Requests.Signup;

/// <summary>
/// The inputs of the CreateSignupSession operation.
/// </summary>
public sealed record CreateSignupSessionRequest
{
    /// <summary>
    /// Public signup request id (sr_ prefix).
    /// </summary>
    [RegularExpression("^sr_[0-9a-f]{32}$")]
    public required string SignupRequestId { get; init; }

    public required SignupSessionRequest Body { get; init; }
}
