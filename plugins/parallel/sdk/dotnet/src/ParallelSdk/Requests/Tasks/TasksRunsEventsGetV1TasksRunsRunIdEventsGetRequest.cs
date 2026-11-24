namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksRunsEventsGetV1TasksRunsRunIdEventsGet operation.
/// </summary>
public sealed record TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest
{
    public required string RunId { get; init; }
}
