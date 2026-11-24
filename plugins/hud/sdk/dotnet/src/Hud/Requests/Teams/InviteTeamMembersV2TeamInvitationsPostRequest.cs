using Hud.Models;

namespace Hud.Requests.Teams;

/// <summary>
/// The inputs of the InviteTeamMembersV2TeamInvitationsPost operation.
/// </summary>
public sealed record InviteTeamMembersV2TeamInvitationsPostRequest
{
    public required TeamInviteRequest Body { get; init; }
}
