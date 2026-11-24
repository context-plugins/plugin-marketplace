using GoogleCloudApiGateway.Models;

namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsGatewaysCreate operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsGatewaysCreateRequest
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
    /// Required. Identifier to assign to the Gateway. Must be unique within scope of the parent resource.
    /// </summary>
    public string? GatewayId { get; init; }

    public required ApigatewayGateway Body { get; init; }
}
