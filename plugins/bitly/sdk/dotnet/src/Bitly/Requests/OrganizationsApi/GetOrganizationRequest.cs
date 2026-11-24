namespace Bitly.Requests.OrganizationsApi;

/// <summary>
/// The inputs of the GetOrganization operation.
/// </summary>
public sealed record GetOrganizationRequest
{
    /// <summary>
    /// A GUID for a Bitly organization
    /// </summary>
    public required string OrganizationGuid { get; init; }
}
