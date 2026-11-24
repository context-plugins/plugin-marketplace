using GoogleCloudApiGateway.Models;

namespace GoogleCloudApiGateway.Requests;

/// <summary>
/// The inputs of the ApigatewayProjectsLocationsApisConfigsPatch operation.
/// </summary>
public sealed record ApigatewayProjectsLocationsApisConfigsPatchRequest
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
    /// Optional. Field mask is used to specify the fields to be overwritten in the ApiConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The request fails if <c>update_mask</c> is missing or empty.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required ApigatewayApiConfig Body { get; init; }
}
