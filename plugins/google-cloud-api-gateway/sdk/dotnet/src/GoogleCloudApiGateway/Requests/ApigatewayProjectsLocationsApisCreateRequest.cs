using GoogleCloudApiGateway.Models;

namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsApisCreate operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsApisCreateRequest
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
    /// Required. Identifier to assign to the API. Must be unique within scope of the parent resource.
    /// </summary>
    public string? ApiId { get; init; }

    public required ApigatewayApi Body { get; init; }
}
