namespace Bitly.Requests.OrganizationsApi;

/// <summary>
/// The inputs of the GetOrganizations operation.
/// </summary>
public sealed record GetOrganizationsRequest
{
    /// <summary>
    /// When set to true, returns all of the user's organizations regardless of the token's allowed_orgs restrictions.
    /// </summary>
    public bool? IncludeAll { get; init; }
}
