using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisMove operation.
/// </summary>
public sealed record ApigeeOrganizationsApisMoveRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    public required GoogleCloudApigeeV1MoveApiProxyRequest Body { get; init; }
}
