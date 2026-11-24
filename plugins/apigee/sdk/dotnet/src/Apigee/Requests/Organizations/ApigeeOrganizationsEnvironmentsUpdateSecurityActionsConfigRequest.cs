using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfig operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest
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
    /// The list of fields to update.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1SecurityActionsConfig Body { get; init; }
}
