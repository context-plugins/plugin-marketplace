namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisRevisionsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsApisRevisionsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }

    /// <summary>
    /// Format used when downloading the API proxy configuration revision. Set to <c>bundle</c> to download the API proxy configuration revision as a zip file.
    /// </summary>
    public string? Format { get; init; }
}
