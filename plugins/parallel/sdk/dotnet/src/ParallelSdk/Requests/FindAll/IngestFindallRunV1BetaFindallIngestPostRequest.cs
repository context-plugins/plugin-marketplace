using ParallelSdk.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the IngestFindallRunV1BetaFindallIngestPost operation.
/// </summary>
public sealed record IngestFindallRunV1BetaFindallIngestPostRequest
{
    public ParallelBeta1? ParallelBeta { get; init; }

    public required IngestInput Body { get; init; }
}
