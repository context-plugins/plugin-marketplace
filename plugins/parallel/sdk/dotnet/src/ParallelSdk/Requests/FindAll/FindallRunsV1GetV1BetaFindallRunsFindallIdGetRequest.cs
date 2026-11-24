using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the FindallRunsV1GetV1BetaFindallRunsFindallIdGet operation.
/// </summary>
public sealed record FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest
{
    public required string FindallId { get; init; }

    public ParallelBeta1? ParallelBeta { get; init; }
}
