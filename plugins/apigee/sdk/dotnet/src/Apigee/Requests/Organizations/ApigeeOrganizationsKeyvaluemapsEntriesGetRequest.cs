namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsKeyvaluemapsEntriesGet operation.
/// </summary>
public sealed record ApigeeOrganizationsKeyvaluemapsEntriesGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (keyvaluemapsId).
    /// </summary>
    public required string KeyvaluemapsId { get; init; }

    /// <summary>
    /// Resource name segment (entriesId).
    /// </summary>
    public required string EntriesId { get; init; }
}
