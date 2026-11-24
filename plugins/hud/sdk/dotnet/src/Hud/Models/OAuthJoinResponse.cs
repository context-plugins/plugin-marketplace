using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// The token user's membership in the application's team.
/// </summary>
public record OAuthJoinResponse
{
    [JsonPropertyName("membership_id")]
    public required int MembershipId { get; init; }

    [JsonPropertyName("team_id")]
    public required Guid TeamId { get; init; }

    [JsonPropertyName("role")]
    public required Role Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
