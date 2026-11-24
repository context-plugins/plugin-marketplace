using Fillo.Models;

namespace Fillo.Requests.Members;

/// <summary>
/// The inputs of the SetMemberRole operation.
/// </summary>
public sealed record SetMemberRoleRequest
{
    /// <summary>
    /// A member id or email address inside the key's workspace.
    /// </summary>
    public required string Id { get; init; }

    public required ApiV1ManageMembersRequest Body { get; init; }
}
