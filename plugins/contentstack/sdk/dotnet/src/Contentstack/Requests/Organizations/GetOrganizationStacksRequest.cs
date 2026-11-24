namespace Contentstack.Requests.Organizations;

/// <summary>
/// The inputs of the GetOrganizationStacks operation.
/// </summary>
public sealed record GetOrganizationStacksRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }
}
