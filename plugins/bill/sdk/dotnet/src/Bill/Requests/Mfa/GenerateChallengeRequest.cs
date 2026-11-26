using Bill.Models;

namespace Bill.Requests.Mfa;

/// <summary>
/// The inputs of the GenerateChallenge operation.
/// </summary>
public sealed record GenerateChallengeRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required MfaChallengeRequestDto Body { get; init; }
}
