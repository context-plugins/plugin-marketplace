namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsOperationsCancel operation.
/// </summary>
public sealed record ApihubProjectsLocationsOperationsCancelRequest
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
    /// Resource name segment (operationsId).
    /// </summary>
    public required string OperationsId { get; init; }

    public required object Body { get; init; }
}
