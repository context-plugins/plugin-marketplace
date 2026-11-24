namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet operation.
/// </summary>
public sealed record TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest
{
    public required string RunId { get; init; }
}
