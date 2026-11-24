using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSharedflowsMove operation.
/// </summary>
public sealed record ApigeeOrganizationsSharedflowsMoveRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (sharedflowsId).
    /// </summary>
    public required string SharedflowsId { get; init; }

    public required GoogleCloudApigeeV1MoveSharedFlowRequest Body { get; init; }
}
