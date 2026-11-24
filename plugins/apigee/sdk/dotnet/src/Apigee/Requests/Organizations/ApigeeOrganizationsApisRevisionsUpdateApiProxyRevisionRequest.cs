using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisRevisionsUpdateApiProxyRevision operation.
/// </summary>
public sealed record ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest
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
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }

    /// <summary>
    /// Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.
    /// </summary>
    public bool? Validate { get; init; }

    public required GoogleApiHttpBody Body { get; init; }
}
