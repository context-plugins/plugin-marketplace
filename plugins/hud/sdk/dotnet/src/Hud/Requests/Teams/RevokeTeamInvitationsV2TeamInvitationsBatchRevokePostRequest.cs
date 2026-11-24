using Hud.Models;

namespace Hud.Requests.Teams;

/// <summary>
/// The inputs of the RevokeTeamInvitationsV2TeamInvitationsBatchRevokePost operation.
/// </summary>
public sealed record RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest
{
    public required TeamInvitationRevokeRequest Body { get; init; }
}
