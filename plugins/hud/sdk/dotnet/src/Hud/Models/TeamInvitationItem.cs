using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// A pending invitation to the team.
/// </summary>
public record TeamInvitationItem
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("role")]
    public required Role Role { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
