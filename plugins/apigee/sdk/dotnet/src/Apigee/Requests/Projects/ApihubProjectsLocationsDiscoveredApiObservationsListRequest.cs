namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsDiscoveredApiObservationsList operation.
/// </summary>
public sealed record ApihubProjectsLocationsDiscoveredApiObservationsListRequest
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
    /// Optional. The maximum number of ApiObservations to return. The service may return fewer than this value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListApiObservations</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListApiObservations</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
