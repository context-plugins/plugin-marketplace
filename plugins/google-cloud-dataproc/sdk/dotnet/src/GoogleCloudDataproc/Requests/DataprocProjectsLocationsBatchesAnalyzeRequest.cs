using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsBatchesAnalyze operation.
/// </summary>
public sealed record DataprocProjectsLocationsBatchesAnalyzeRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Resource name segment (batchesId).
    /// </summary>
    public required string BatchesId { get; init; }

    public required AnalyzeBatchRequest Body { get; init; }
}
