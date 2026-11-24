using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobChartDataV2JobsJobIdChartDataGet operation.
/// </summary>
public sealed record GetJobChartDataV2JobsJobIdChartDataGetRequest
{
    public required Guid JobId { get; init; }

    [Minimum(1)]
    [Maximum(10000)]
    public int Limit { get; init; } = 5000;
}
