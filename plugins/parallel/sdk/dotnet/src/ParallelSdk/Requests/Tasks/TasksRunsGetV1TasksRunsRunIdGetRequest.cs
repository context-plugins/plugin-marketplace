namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksRunsGetV1TasksRunsRunIdGet operation.
/// </summary>
public sealed record TasksRunsGetV1TasksRunsRunIdGetRequest
{
    public required string RunId { get; init; }
}
