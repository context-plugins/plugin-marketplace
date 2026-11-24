using Tabby.Models;

namespace Tabby.Requests.DisputesApi;

/// <summary>
/// The inputs of the PostDisputesChallenge operation.
/// </summary>
public sealed record PostDisputesChallengeRequest
{
    public required ApiV1DisputesChallengeRequest Body { get; init; }
}
