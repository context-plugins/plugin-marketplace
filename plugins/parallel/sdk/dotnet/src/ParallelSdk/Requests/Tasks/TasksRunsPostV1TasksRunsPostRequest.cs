using ParallelSdk.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.Tasks;

/// <summary>
/// The inputs of the TasksRunsPostV1TasksRunsPost operation.
/// </summary>
public sealed record TasksRunsPostV1TasksRunsPostRequest
{
    public ParallelBeta1? ParallelBeta { get; init; }

    public required TaskRunInput Body { get; init; }
}
