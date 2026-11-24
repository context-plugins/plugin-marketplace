using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Invitations that are no longer pending, and why each remaining one still is.
/// </summary>
public record TeamInvitationRevokeResponse
{
    [JsonPropertyName("succeeded")]
    public required IReadOnlyList<string> Succeeded { get; init; }

    [JsonPropertyName("failed")]
    public required IReadOnlyList<TeamInvitationFailure> Failed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
