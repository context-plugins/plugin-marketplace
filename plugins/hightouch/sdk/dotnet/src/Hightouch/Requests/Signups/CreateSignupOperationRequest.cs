using Hightouch.Models;

namespace Hightouch.Requests.Signups;

/// <summary>
/// The inputs of the CreateSignup operation.
/// </summary>
public sealed record CreateSignupOperationRequest
{
    public required CreateSignupRequest Body { get; init; }
}
