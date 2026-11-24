using Deliverd.Models;

namespace Deliverd.Requests.RiskIndicators;

/// <summary>
/// The inputs of the PostApiV1RiskIndicatorsByKeyReadings operation.
/// </summary>
public sealed record PostApiV1RiskIndicatorsByKeyReadingsRequest
{
    public required string Key { get; init; }

    public ApiV1RiskIndicatorsReadingsRequest? Body { get; init; }
}
