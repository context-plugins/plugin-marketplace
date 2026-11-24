namespace Contentstack.Requests.ScimGroups;

/// <summary>
/// The inputs of the ListScimGroups operation.
/// </summary>
public sealed record ListScimGroupsRequest
{
    /// <summary>
    /// The unique identifier of the Contentstack organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// SCIM filter expression for searching groups. Example: displayName eq "Editors"
    /// </summary>
    public string? Filter { get; init; }
}
