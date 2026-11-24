using GoogleCloudApiGateway.Models;

namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsApisConfigsCreate operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsApisConfigsCreateRequest
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
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Required. Identifier to assign to the API Config. Must be unique within scope of the parent resource.
    /// </summary>
    public string? ApiConfigId { get; init; }

    public required ApigatewayApiConfig Body { get; init; }
}
