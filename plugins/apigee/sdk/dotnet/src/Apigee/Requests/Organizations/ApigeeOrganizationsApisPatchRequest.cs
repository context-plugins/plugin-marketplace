using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsApisPatchRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Required. The list of fields to update.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1ApiProxy Body { get; init; }
}
