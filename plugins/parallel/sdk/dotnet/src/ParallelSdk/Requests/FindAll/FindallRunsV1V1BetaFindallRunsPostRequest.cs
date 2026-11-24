using ParallelSdk.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the FindallRunsV1V1BetaFindallRunsPost operation.
/// </summary>
public sealed record FindallRunsV1V1BetaFindallRunsPostRequest
{
    public ParallelBeta1? ParallelBeta { get; init; }

    public required FindAllRunInput Body { get; init; }
}
