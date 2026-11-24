using DidLogic.Models;

namespace DidLogic.Requests.RiskChecks;

/// <summary>
/// The inputs of the NumbersRiskChecksCreate operation.
/// </summary>
public sealed record NumbersRiskChecksCreateRequest
{
    public required ApiV2NumbersRiskChecksRequest Body { get; init; }
}
