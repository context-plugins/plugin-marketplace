namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest
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
    /// Resource name segment (keyvaluemapsId).
    /// </summary>
    public required string KeyvaluemapsId { get; init; }

    /// <summary>
    /// Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
