using System;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Requests.Tasks;

/// <summary>
/// The inputs of the GetTaskTracesV2TasksTaskIdTracesGet operation.
/// </summary>
public sealed record GetTaskTracesV2TasksTaskIdTracesGetRequest
{
    public required Guid TaskId { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 20;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;

    public TaskVersionId? TaskVersionId { get; init; }

    public ModelId? ModelId { get; init; }

    public bool ExcludeTraining { get; init; } = false;
}
