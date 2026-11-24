using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the ListEnrichedJobsV2JobsEnrichedGet operation.
/// </summary>
public sealed record ListEnrichedJobsV2JobsEnrichedGetRequest
{
    public required Guid TasksetId { get; init; }

    [Minimum(1)]
    [Maximum(1000)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
