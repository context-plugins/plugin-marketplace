using Hud.Models;

namespace Hud.Requests.Teams;

/// <summary>
/// The inputs of the UpdateTeamMemberRolesV2TeamMembersBatchRolePost operation.
/// </summary>
public sealed record UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest
{
    public required TeamMemberRoleUpdateRequest Body { get; init; }
}
