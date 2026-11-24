using Fillo.Models;

namespace Fillo.Requests.Members;

/// <summary>
/// The inputs of the InviteWorkspaceMember operation.
/// </summary>
public sealed record InviteWorkspaceMemberRequest
{
    public required ApiV1ManageMembersInvitesRequest Body { get; init; }
}
