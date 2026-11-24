namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsOperationsCancel operation.
/// </summary>
public sealed record DataprocProjectsRegionsOperationsCancelRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (regionsId).
    /// </summary>
    public required string RegionsId { get; init; }

    /// <summary>
    /// Resource name segment (operationsId).
    /// </summary>
    public required string OperationsId { get; init; }
}
