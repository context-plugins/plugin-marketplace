namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet operation.
/// </summary>
public sealed record TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest
{
    public required string TaskgroupId { get; init; }

    public required string RunId { get; init; }
}
