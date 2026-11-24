namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsGetSyncAuthorization operation.
/// </summary>
public sealed record ApigeeOrganizationsGetSyncAuthorizationRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required object Body { get; init; }
}
