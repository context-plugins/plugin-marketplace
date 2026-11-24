using Hud.Models;

namespace Hud.Requests.Teams;

/// <summary>
/// The inputs of the RemoveTeamMembersV2TeamMembersBatchRemovePost operation.
/// </summary>
public sealed record RemoveTeamMembersV2TeamMembersBatchRemovePostRequest
{
    public required TeamMemberRemoveRequest Body { get; init; }
}
