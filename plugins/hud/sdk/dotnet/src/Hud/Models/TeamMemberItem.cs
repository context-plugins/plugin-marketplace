using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

public record TeamMemberItem
{
    [JsonPropertyName("user_id")]
    public required Guid UserId { get; init; }

    [JsonPropertyName("membership_id")]
    public required int MembershipId { get; init; }

    [JsonPropertyName("role")]
    public required Role Role { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public NameHudPlatformJobsApi? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public Email? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avatar_url")]
    public AvatarUrl? AvatarUrl { get; init; }

    [JsonPropertyName("joined_at")]
    public required DateTimeOffset JoinedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
