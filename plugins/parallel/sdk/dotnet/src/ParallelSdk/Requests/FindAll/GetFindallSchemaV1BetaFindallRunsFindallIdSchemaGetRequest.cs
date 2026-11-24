using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGet operation.
/// </summary>
public sealed record GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest
{
    public required string FindallId { get; init; }

    public ParallelBeta1? ParallelBeta { get; init; }
}
