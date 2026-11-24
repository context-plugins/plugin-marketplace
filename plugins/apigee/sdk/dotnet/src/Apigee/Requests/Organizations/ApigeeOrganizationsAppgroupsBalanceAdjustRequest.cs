using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsBalanceAdjust operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsBalanceAdjustRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (appgroupsId).
    /// </summary>
    public required string AppgroupsId { get; init; }

    public required GoogleCloudApigeeV1AdjustAppGroupBalanceRequest Body { get; init; }
}
