using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSecurityActionsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest
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
    /// Required. The ID to use for the SecurityAction, which will become the final component of the action's resource name. This value should be 0-61 characters, and valid format is (^<see href="[a-z0-9-]{​0,61}[a-z0-9]">a-z</see>?$).
    /// </summary>
    public string? SecurityActionId { get; init; }

    public required GoogleCloudApigeeV1SecurityAction Body { get; init; }
}
