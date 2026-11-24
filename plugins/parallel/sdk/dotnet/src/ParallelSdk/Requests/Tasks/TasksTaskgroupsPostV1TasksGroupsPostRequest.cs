using ParallelSdk.Models;

namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksTaskgroupsPostV1TasksGroupsPost operation.
/// </summary>
public sealed record TasksTaskgroupsPostV1TasksGroupsPostRequest
{
    public required CreateTaskGroupRequest Body { get; init; }
}
