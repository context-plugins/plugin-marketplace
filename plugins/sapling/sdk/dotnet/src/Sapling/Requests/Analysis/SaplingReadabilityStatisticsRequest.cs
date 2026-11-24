using Sapling.Models;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingReadabilityStatistics operation.
/// </summary>
public sealed record SaplingReadabilityStatisticsRequest
{
    public required ApiV1StatisticsRequest Body { get; init; }
}
