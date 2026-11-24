using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (appgroupsId).
    /// </summary>
    public required string AppgroupsId { get; init; }

    /// <summary>
    /// Activate or de-activate the AppGroup by setting the action as <c>active</c> or <c>inactive</c>. The <c>Content-Type</c> header must be set to <c>application/octet-stream</c>, with empty body.
    /// </summary>
    public string? Action { get; init; }

    public required GoogleCloudApigeeV1AppGroup Body { get; init; }
}
