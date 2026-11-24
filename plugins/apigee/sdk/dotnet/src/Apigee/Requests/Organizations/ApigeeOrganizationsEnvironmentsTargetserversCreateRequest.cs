using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsTargetserversCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsTargetserversCreateRequest
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
    /// Optional. The ID to give the TargetServer. This will overwrite the value in TargetServer.
    /// </summary>
    public string? Name { get; init; }

    public required GoogleCloudApigeeV1TargetServer Body { get; init; }
}
