using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the ListJobTracesV2JobsJobIdTracesGet operation.
/// </summary>
public sealed record ListJobTracesV2JobsJobIdTracesGetRequest
{
    public required Guid JobId { get; init; }

    [Minimum(1)]
    [Maximum(1000)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
