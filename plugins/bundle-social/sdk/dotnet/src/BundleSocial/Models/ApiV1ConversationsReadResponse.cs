using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1ConversationsReadResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("socialAccountId")]
    public required string SocialAccountId { get; init; }

    /// <summary>
    /// Messaging platform. Extensible: new platforms are added over time, so handle unknown values gracefully rather than switching exhaustively.
    /// </summary>
    [JsonPropertyName("platform")]
    public required Platform30 Platform { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalConversationId")]
    public string? ExternalConversationId { get; init; }

    [JsonPropertyName("externalParticipantId")]
    public required string ExternalParticipantId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("participantUsername")]
    public string? ParticipantUsername { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("participantDisplayName")]
    public string? ParticipantDisplayName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("participantAvatarUrl")]
    public string? ParticipantAvatarUrl { get; init; }

    [JsonPropertyName("status")]
    public required StatusBundleSocialConversationApi Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMessageAt")]
    public DateTimeOffset? LastMessageAt { get; init; }

    [JsonPropertyName("lastActivityAt")]
    public required DateTimeOffset? LastActivityAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMessagePreview")]
    public string? LastMessagePreview { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastReadAt")]
    public DateTimeOffset? LastReadAt { get; init; }

    [JsonPropertyName("unreadCount")]
    public required double UnreadCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platformSeenAt")]
    public DateTimeOffset? PlatformSeenAt { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platformData")]
    public PlatformData? PlatformData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("socialAccount")]
    public SocialAccount? SocialAccount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
