using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSecurityActionsPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest
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
    /// Resource name segment (securityActionsId).
    /// </summary>
    public required string SecurityActionsId { get; init; }

    /// <summary>
    /// Optional. The list of fields to update. Valid fields to update are <c>description</c>, <c>state</c>, <c>allow</c>, <c>deny</c>, and <c>flag</c>, <c>expire_time</c>, and <c>ttl</c>, <c>api_proxies</c>, and <c>condition_config</c>.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1SecurityAction Body { get; init; }
}
