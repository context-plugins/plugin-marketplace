using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the ListActiveJobsV2JobsActiveGet operation.
/// </summary>
public sealed record ListActiveJobsV2JobsActiveGetRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
