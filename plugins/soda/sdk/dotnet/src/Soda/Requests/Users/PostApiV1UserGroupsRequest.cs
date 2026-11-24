using Soda.Models;

namespace Soda.Requests.Users;

/// <summary>
/// The inputs of the PostApiV1UserGroups operation.
/// </summary>
public sealed record PostApiV1UserGroupsRequest
{
    public required PublicApiCreateUserGroupRequestDto Body { get; init; }
}
