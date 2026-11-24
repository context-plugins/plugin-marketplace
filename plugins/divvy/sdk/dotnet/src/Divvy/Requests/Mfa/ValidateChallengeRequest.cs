using Divvy.Models;

namespace Divvy.Requests.Mfa;

/// <summary>
/// The inputs of the ValidateChallenge operation.
/// </summary>
public sealed record ValidateChallengeRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required MfaChallengeValidateRequestDto Body { get; init; }
}
