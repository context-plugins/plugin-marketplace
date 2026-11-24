using GoogleCloudApiGateway.Models;

namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsApisConfigsSetIamPolicy operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest
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
    /// Resource name segment (configsId).
    /// </summary>
    public required string ConfigsId { get; init; }

    public required ApigatewaySetIamPolicyRequest Body { get; init; }
}
