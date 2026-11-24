using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSpacesSetIamPolicy operation.
/// </summary>
public sealed record ApigeeOrganizationsSpacesSetIamPolicyRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (spacesId).
    /// </summary>
    public required string SpacesId { get; init; }

    public required GoogleIamV1SetIamPolicyRequest Body { get; init; }
}
