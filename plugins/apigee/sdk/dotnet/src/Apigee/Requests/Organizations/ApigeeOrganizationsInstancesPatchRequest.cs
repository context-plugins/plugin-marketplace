using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsInstancesPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsInstancesPatchRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (instancesId).
    /// </summary>
    public required string InstancesId { get; init; }

    /// <summary>
    /// List of fields to be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1Instance Body { get; init; }
}
