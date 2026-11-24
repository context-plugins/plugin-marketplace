using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the CancelFindallRunV1BetaFindallRunsFindallIdCancelPost operation.
/// </summary>
public sealed record CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest
{
    public required string FindallId { get; init; }

    public ParallelBeta1? ParallelBeta { get; init; }
}
