using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet operation.
/// </summary>
public sealed record TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest
{
    public required string TaskgroupId { get; init; }

    public LastEventId? LastEventId { get; init; }

    public TimeoutModel? Timeout { get; init; }
}
