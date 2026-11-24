using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet operation.
/// </summary>
public sealed record TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest
{
    public required string TaskgroupId { get; init; }

    public LastEventId? LastEventId { get; init; }

    public Status11ParallelAiTasksApi? Status { get; init; }

    public bool IncludeInput { get; init; } = false;

    public bool IncludeOutput { get; init; } = false;
}
