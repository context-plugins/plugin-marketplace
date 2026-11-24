namespace Contentstack.Requests.ScimUsers;

/// <summary>
/// The inputs of the ListScimUsers operation.
/// </summary>
public sealed record ListScimUsersRequest
{
    /// <summary>
    /// The unique identifier of the Contentstack organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// SCIM filter expression for searching users. Example: userName eq "user@example.com"
    /// </summary>
    public string? Filter { get; init; }
}
