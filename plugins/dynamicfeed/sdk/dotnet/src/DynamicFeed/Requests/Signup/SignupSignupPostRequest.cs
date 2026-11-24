using DynamicFeed.Models;

namespace DynamicFeed.Requests.Signup;

/// <summary>
/// The inputs of the SignupSignupPost operation.
/// </summary>
public sealed record SignupSignupPostRequest
{
    public BodySignupSignupPost? Body { get; init; }
}
