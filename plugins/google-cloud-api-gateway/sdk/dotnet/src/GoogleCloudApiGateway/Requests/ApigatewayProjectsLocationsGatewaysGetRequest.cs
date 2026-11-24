namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsGatewaysGet operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsGatewaysGetRequest
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
}
