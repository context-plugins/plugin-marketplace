namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsInstancesList operation.
/// </summary>
public sealed record ApigeeOrganizationsInstancesListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Maximum number of instances to return. Defaults to 25.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Page token, returned from a previous ListInstances call, that you can use to retrieve the next page of content.
    /// </summary>
    public string? PageToken { get; init; }
}
