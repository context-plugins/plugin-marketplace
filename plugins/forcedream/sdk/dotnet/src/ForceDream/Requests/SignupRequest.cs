using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the Signup operation.
/// </summary>
public sealed record SignupRequest
{
    public required ApiSignupRequest Body { get; init; }
}
