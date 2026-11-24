namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet operation.
/// </summary>
public sealed record TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest
{
    public required string TaskgroupId { get; init; }
}
