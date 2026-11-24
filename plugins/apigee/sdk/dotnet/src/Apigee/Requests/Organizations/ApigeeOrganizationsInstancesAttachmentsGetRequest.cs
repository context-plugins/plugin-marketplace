namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsInstancesAttachmentsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsInstancesAttachmentsGetRequest
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
    /// Resource name segment (attachmentsId).
    /// </summary>
    public required string AttachmentsId { get; init; }
}
