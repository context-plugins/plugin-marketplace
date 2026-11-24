using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsTargetserversUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Resource name segment (targetserversId).
    /// </summary>
    public required string TargetserversId { get; init; }

    public required GoogleCloudApigeeV1TargetServer Body { get; init; }
}
