using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablement operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    public required GoogleCloudApigeeV1SetAddonEnablementRequest Body { get; init; }
}
