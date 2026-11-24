using ParallelSdk.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the ExtendFindallRunV1BetaFindallRunsFindallIdExtendPost operation.
/// </summary>
public sealed record ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest
{
    public required string FindallId { get; init; }

    public ParallelBeta1? ParallelBeta { get; init; }

    public required FindAllExtendInput Body { get; init; }
}
