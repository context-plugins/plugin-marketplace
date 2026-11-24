using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Tasksets;

/// <summary>
/// The inputs of the ListTasksetTasksV2TasksetsTasksetIdTasksGet operation.
/// </summary>
public sealed record ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest
{
    public required Guid TasksetId { get; init; }

    [Minimum(1)]
    [Maximum(1000)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
