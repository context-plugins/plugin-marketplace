namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsHostQueriesGetResultView operation.
/// </summary>
public sealed record ApigeeOrganizationsHostQueriesGetResultViewRequest
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
