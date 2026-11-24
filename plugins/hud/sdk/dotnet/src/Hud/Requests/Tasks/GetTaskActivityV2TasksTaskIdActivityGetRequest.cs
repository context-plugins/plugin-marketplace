using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the GetTaskActivityV2TasksTaskIdActivityGet operation.
/// </summary>
public sealed record GetTaskActivityV2TasksTaskIdActivityGetRequest
{
    public required Guid TaskId { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;
}
