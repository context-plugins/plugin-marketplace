namespace Bitly.Requests.OrganizationsApi;

/// <summary>
/// The inputs of the GetOrganizationShortenCountsByGroup operation.
/// </summary>
public sealed record GetOrganizationShortenCountsByGroupRequest
{
    /// <summary>
    /// A GUID for a Bitly organization
    /// </summary>
    public required string OrganizationGuid { get; init; }
}
