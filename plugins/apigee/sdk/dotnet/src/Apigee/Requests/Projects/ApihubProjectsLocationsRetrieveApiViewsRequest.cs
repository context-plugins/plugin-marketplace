using Apigee.Models.Enums;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsRetrieveApiViews operation.
/// </summary>
public sealed record ApihubProjectsLocationsRetrieveApiViewsRequest
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
    /// Optional. The filter expression.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of results to return. Default to 100.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>RetrieveApiViews</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Required. The view type to return.
    /// </summary>
    public ViewApigeeProjectsApi? View { get; init; }
}
