using Soda.Models;

namespace Soda.Requests.Users;

/// <summary>
/// The inputs of the PostApiV1UserGroupsUserGroupId operation.
/// </summary>
public sealed record PostApiV1UserGroupsUserGroupIdRequest
{
    public required string UserGroupId { get; init; }

    public required PublicApiUpdateUserGroupRequestDto Body { get; init; }
}
