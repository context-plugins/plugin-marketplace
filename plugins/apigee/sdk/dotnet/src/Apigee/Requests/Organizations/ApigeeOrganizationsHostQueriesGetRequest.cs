namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsHostQueriesGet operation.
/// </summary>
public sealed record ApigeeOrganizationsHostQueriesGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (hostQueriesId).
    /// </summary>
    public required string HostQueriesId { get; init; }
}
