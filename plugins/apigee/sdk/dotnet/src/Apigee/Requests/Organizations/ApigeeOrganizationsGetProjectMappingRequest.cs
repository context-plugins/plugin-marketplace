namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsGetProjectMapping operation.
/// </summary>
public sealed record ApigeeOrganizationsGetProjectMappingRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }
}
