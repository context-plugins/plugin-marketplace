namespace Soda.Requests.Users;

/// <summary>
/// The inputs of the DeleteApiV1UserGroupsUserGroupId operation.
/// </summary>
public sealed record DeleteApiV1UserGroupsUserGroupIdRequest
{
    public required string UserGroupId { get; init; }
}
