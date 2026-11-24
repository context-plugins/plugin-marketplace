using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Requests.Credentials;

/// <summary>
/// The inputs of the AnswerChallenge operation.
/// </summary>
public sealed record AnswerChallengeRequest
{
    public required AnswerRequest Body { get; init; }
}
