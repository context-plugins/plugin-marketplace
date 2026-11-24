namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSharedflowsRevisionsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsSharedflowsRevisionsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (sharedflowsId).
    /// </summary>
    public required string SharedflowsId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }

    /// <summary>
    /// Specify <c>bundle</c> to export the contents of the shared flow bundle. Otherwise, the bundle metadata is returned.
    /// </summary>
    public string? Format { get; init; }
}
