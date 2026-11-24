namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest
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
    /// Resource name segment (discoveredApiObservationsId).
    /// </summary>
    public required string DiscoveredApiObservationsId { get; init; }

    /// <summary>
    /// Optional. DiscoveredApiOperations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListDiscoveredApiApiOperations</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListDiscoveredApiApiOperations</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
