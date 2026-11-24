using GoogleCloudApiGateway.Models;

namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsGatewaysTestIamPermissions operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest
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
    /// Resource name segment (gatewaysId).
    /// </summary>
    public required string GatewaysId { get; init; }

    public required ApigatewayTestIamPermissionsRequest Body { get; init; }
}
