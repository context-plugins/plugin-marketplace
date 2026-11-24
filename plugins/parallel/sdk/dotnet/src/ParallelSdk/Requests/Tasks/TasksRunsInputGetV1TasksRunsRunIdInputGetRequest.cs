namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksRunsInputGetV1TasksRunsRunIdInputGet operation.
/// </summary>
public sealed record TasksRunsInputGetV1TasksRunsRunIdInputGetRequest
{
    public required string RunId { get; init; }
}
