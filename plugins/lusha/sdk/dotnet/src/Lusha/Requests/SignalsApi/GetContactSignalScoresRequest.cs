using Lusha.Models;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the GetContactSignalScores operation.
/// </summary>
public sealed record GetContactSignalScoresRequest
{
    public required V3SignalScoreContactsRequest Body { get; init; }
}
