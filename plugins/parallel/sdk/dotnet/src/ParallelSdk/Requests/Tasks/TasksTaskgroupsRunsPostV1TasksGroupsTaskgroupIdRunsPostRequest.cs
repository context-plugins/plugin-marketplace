using ParallelSdk.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost operation.
/// </summary>
public sealed record TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest
{
    public required string TaskgroupId { get; init; }

    public bool RefreshStatus { get; init; } = true;

    public ParallelBeta1? ParallelBeta { get; init; }

    public required TaskGroupRunRequest Body { get; init; }
}
