namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDatacollectorsList operation.
/// </summary>
public sealed record ApigeeOrganizationsDatacollectorsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Maximum number of data collectors to return. The page size defaults to 25.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Page token, returned from a previous ListDataCollectors call, that you can use to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
