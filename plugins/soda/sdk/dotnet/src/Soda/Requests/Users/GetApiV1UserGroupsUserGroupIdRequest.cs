namespace Soda.Requests.Users;

/// <summary>
/// The inputs of the GetApiV1UserGroupsUserGroupId operation.
/// </summary>
public sealed record GetApiV1UserGroupsUserGroupIdRequest
{
    public required string UserGroupId { get; init; }
}
