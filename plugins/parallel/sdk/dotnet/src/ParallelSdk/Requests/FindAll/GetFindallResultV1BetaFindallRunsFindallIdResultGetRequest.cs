using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the GetFindallResultV1BetaFindallRunsFindallIdResultGet operation.
/// </summary>
public sealed record GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest
{
    public required string FindallId { get; init; }

    public ParallelBeta1? ParallelBeta { get; init; }
}
