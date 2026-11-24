using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TeamInvitationRevokeRequest
{
    [JsonPropertyName("invitation_ids")]
    [MinLength(1)]
    [MaxLength(30)]
    public required IReadOnlyList<string> InvitationIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
