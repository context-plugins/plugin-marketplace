using GoogleCloudApiGateway.Models;

namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsGatewaysSetIamPolicy operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest
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

    public required ApigatewaySetIamPolicyRequest Body { get; init; }
}
