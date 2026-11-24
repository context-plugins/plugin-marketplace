using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TeamInvitationsResponse
{
    [JsonPropertyName("invitations")]
    public required IReadOnlyList<TeamInvitationItem> Invitations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
