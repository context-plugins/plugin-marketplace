using GoogleCloudApiGateway.Models.Enums;

namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsApisConfigsGet operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsApisConfigsGetRequest
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

    /// <summary>
    /// Optional. Specifies which fields of the API Config are returned in the response. Defaults to <c>BASIC</c> view.
    /// </summary>
    public View? View { get; init; }
}
