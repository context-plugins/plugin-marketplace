namespace Contentstack.Requests.Organizations;

/// <summary>
/// The inputs of the GetOrganization operation.
/// </summary>
public sealed record GetOrganizationRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }
}
