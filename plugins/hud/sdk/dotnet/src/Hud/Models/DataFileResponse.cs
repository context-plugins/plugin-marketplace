using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// Size is reserved up front and verified against the stored object on completion.
/// </summary>
public record DataFileResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("team_id")]
    public required Guid TeamId { get; init; }

    [JsonPropertyName("membership_id")]
    public required int MembershipId { get; init; }

    [JsonPropertyName("scope")]
    public required Scope Scope { get; init; }

    [JsonPropertyName("status")]
    public required StatusHudPlatformDataApi Status { get; init; }

    [JsonPropertyName("filename")]
    public required string Filename { get; init; }

    [JsonPropertyName("content_type")]
    public required ContentType ContentType { get; init; }

    [JsonPropertyName("size_bytes")]
    public required SizeBytes SizeBytes { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
