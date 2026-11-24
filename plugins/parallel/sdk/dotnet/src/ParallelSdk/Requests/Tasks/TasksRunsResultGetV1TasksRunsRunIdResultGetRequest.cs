using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksRunsResultGetV1TasksRunsRunIdResultGet operation.
/// </summary>
public sealed record TasksRunsResultGetV1TasksRunsRunIdResultGetRequest
{
    public required string RunId { get; init; }

    public int Timeout { get; init; } = 600;

    public ParallelBeta1? ParallelBeta { get; init; }
}
