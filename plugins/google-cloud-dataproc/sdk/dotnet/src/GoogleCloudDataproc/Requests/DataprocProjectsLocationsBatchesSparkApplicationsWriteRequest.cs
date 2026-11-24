using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsBatchesSparkApplicationsWrite operation.
/// </summary>
public sealed record DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest
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

    /// <summary>
    /// Resource name segment (sparkApplicationsId).
    /// </summary>
    public required string SparkApplicationsId { get; init; }

    public required WriteSparkApplicationContextRequest Body { get; init; }
}
