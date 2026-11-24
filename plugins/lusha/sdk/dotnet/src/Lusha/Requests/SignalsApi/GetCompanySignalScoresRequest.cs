using Lusha.Models;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the GetCompanySignalScores operation.
/// </summary>
public sealed record GetCompanySignalScoresRequest
{
    public required V3SignalScoreCompaniesRequest Body { get; init; }
}
