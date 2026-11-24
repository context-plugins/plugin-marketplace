using ParallelSdk.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPost operation.
/// </summary>
public sealed record EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest
{
    public required string FindallId { get; init; }

    public ParallelBeta1? ParallelBeta { get; init; }

    public required FindAllEnrichInput Body { get; init; }
}
